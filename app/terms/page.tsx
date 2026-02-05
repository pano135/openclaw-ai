import React from 'react';

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 py-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
                <p className="text-sm text-slate-500 mb-8">Effective Date: February 5, 2026</p>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-xl font-bold text-white mb-2">1. Acceptance of Terms</h2>
                        <p>
                            By accessing OpenClaw AI (openclaw-ai.pro) or downloading the OpenClaw framework, you agree to comply with these Terms of Service.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-2">2. Open Source License</h2>
                        <p>
                            The OpenClaw core framework is distributed under the <strong>MIT License</strong>. You are free to use, modify, and distribute the software
                            in accordance with the license terms. This website serves as a documentation hub and branding resource.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-2">3. Disclaimer of Warranties</h2>
                        <p>
                            The software and this website are provided "AS IS", without warranty of any kind, express or implied.
                            OpenClaw AI contributors are not liable for any damages arising from the use of autonomous agents,
                            including but not limited to financial loss, data corruption, or unintended agent behavior.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-2">4. Responsible AI Usage</h2>
                        <p>
                            You agree not to use OpenClaw for illegal activities, including the deployment of malicious botnets,
                            automated harassment, or "ClawHavoc" style infostealer campaigns. We reserve the right to blacklist
                            malicious Skill IDs from our community index.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
