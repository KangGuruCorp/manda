import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { questionText, studentAnswer, rubric, indicator, cognitiveLevel, scoringCriteria, customApiKey, customModel } = await req.json();

        // Strictly use custom API Key from settings as requested
        const apiKey = customApiKey;
        
        if (!apiKey || apiKey.trim() === "" || apiKey === "your_gemini_api_key") {
            return NextResponse.json({ 
                error: "API Key belum diatur. Silakan masukkan API Key di menu Pengaturan Dashboard Admin." 
            }, { status: 400 });
        }

        if (!studentAnswer || studentAnswer.trim().length < 2) {
            return NextResponse.json({ score: 0, feedback: "Jawaban kosong atau terlalu singkat." });
        }

        // Use custom model from settings or default to gemini-2.5-flash
        const model = customModel || "gemini-2.5-flash";
        const URL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

        const prompt = `
            Anda adalah pakar evaluasi pendidikan matematika. Tugas Anda adalah menilai jawaban siswa pada soal esai berpikir kritis (0-4).

            DATA SOAL:
            Teks Soal: "${questionText}"
            Indikator: "${indicator}"
            Level Kognitif: "${cognitiveLevel}"
            Rambu-rambu Jawaban Ideal:
            ${rubric.map((r: string, i: number) => `${i + 1}. ${r}`).join("\n")}

            JAWABAN SISWA:
            "${studentAnswer}"

            RUBRIK PENILAIAN SPESIFIK (0-4):
            4: ${scoringCriteria[4]}
            3: ${scoringCriteria[3]}
            2: ${scoringCriteria[2]}
            1: ${scoringCriteria[1]}
            0: ${scoringCriteria[0]}

            FORMAT OUTPUT (JSON):
            {
                "score": [angka 0-4],
                "feedback": "[maks 2 kalimat]"
            }
        `;

        const response = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Gemini API Error:", data);
            return NextResponse.json({
                error: `API ${response.status}: ${data.error?.message || "Error tidak dikenal"}`
            }, { status: response.status });
        }

        const candidate = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!candidate) {
            return NextResponse.json({ error: "AI tidak memberikan respons valid." }, { status: 500 });
        }

        const jsonMatch = candidate.match(/\{[\s\S]*\}/);
        const result = jsonMatch ? JSON.parse(jsonMatch[0]) : { score: 1, feedback: "Gagal memproses JSON AI." };

        return NextResponse.json(result);

    } catch (error: any) {
        console.error("AI Grading Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
