import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 py-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                <p className="text-sm text-slate-500 mb-8">Last Updated: February 5, 2026</p>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-xl font-bold text-white mb-2">1. Local Sovereignty First</h2>
                        <p>
                            OpenClaw AI is designed with a "Local First" architecture. Unlike centralized AI platforms,
                            <strong>we do not collect, store, or transmit your inference data, prompts, or agent memories</strong> to our servers.
                            All agentic reasoning occurs locally on your Mac Mini cluster or private Docker swarm.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-2">2. Data Collection on this Website</h2>
                        <p>
                            When you visit openclaw-ai.pro, we collect minimal, anonymous usage data to improve site performance.
                            This includes standard web traffic analytics (page views, referrer sources). We do not use persistent tracking cookies for advertising.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-2">3. Third-Party Integrations</h2>
                        <p>
                            If you choose to use third-party backend providers (e.g., Kimi, Claude, OpenAI) via the OpenClaw Gateway,
                            your data will be subject to their respective privacy policies. We strongly recommend using local models (Llama 4 via Ollama)
                            for maximum privacy assurance.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-2">4. Contact Us</h2>
                        <p>
                            For privacy-related inquiries regarding the OpenClaw framework, please open an issue on our GitHub repository.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
