import { notFound } from "next/navigation";
import { portfolioDatabase } from "@/lib/data/portfolio";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, MapPin, Calendar, Clock, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export async function generateMetadata({ params }: { params: Promise<{ projectId: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const project = portfolioDatabase.find(p => p.id === resolvedParams.projectId);
    if (!project) return { title: 'Project Not Found' };
    
    return {
      title: `${project.title} | SR DreamSpace Realty Portfolio`,
      description: project.shortDesc,
    };
  }

export default async function ProjectDetailPage({ params }: { params: Promise<{ projectId: string }> }) {
    const resolvedParams = await params;
    const project = portfolioDatabase.find(p => p.id === resolvedParams.projectId);

    if (!project) {
        notFound();
    }

    return (
        <div className="bg-white pb-32">
            {/* Header */}
            <div className="bg-slate-50 border-b border-slate-100 pt-32 pb-12">
                <div className="container mx-auto px-4 md:px-8">
                    <Link href="/portfolio" className="inline-flex items-center text-brand-blue font-bold hover:text-brand-gold mb-8 transition-colors">
                        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Gallery
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-3xl">
                            <span className="inline-block bg-brand-gold/10 text-brand-gold px-4 py-1.5 rounded-full font-bold text-sm tracking-widest uppercase mb-4">
                                {project.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-blue leading-tight mb-4 tracking-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                {project.shortDesc}
                            </p>
                        </div>
                        <Link href="/get-a-quote" className="shrink-0">
                            <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white font-bold h-14 px-8 rounded-xl shadow-lg transition-transform hover:scale-105">
                                Build Something Similar
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-8 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Column: Visuals & Overview */}
                    <div className="lg:col-span-8 flex flex-col gap-12">
                        {/* Before/After Presentation */}
                        <div className="space-y-6">
                            {project.beforeImage ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative group">
                                        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider z-10 border border-white/10">Before</div>
                                        <img src={project.beforeImage} alt={`Before ${project.title}`} className="w-full h-80 object-cover rounded-2xl shadow-md border border-slate-100" />
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute top-4 left-4 bg-brand-gold text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider z-10 shadow-lg">Final Result</div>
                                        <img src={project.afterImage} alt={`After ${project.title}`} className="w-full h-80 object-cover rounded-2xl shadow-xl border border-brand-gold/20" />
                                    </div>
                                </div>
                            ) : (
                                <img src={project.afterImage} alt={project.title} className="w-full h-[60vh] object-cover rounded-3xl shadow-xl border border-slate-100" />
                            )}
                        </div>

                        {/* Story / Overview */}
                        <div>
                            <h2 className="text-3xl font-bold text-brand-blue mb-6">The Challenge & Vision</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {project.overview}
                            </p>
                        </div>

                        {/* CTA Banner Inline */}
                        <div className="bg-brand-blue rounded-3xl p-10 flex flex-col sm:flex-row items-center justify-between text-white relative overflow-hidden shadow-2xl mt-8">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-3xl rounded-full pointer-events-none" />
                            <div className="relative z-10 mb-6 sm:mb-0">
                                <h3 className="text-2xl font-bold mb-2">Impressed by this standard?</h3>
                                <p className="text-slate-300">Let's discuss how we can execute your project flawlessly.</p>
                            </div>
                            <Link href="/get-a-quote" className="relative z-10 w-full sm:w-auto">
                                <Button className="w-full sm:w-auto border-2 border-brand-gold bg-brand-gold hover:bg-transparent text-white font-bold h-14 px-8 rounded-xl transition-all">
                                    Start Your Project
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Key Details */}
                    <div className="lg:col-span-4">
                        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm sticky top-[120px]">
                            <h3 className="text-2xl font-bold text-brand-blue mb-8">Project Details</h3>
                            
                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="bg-slate-50 p-3 rounded-full text-brand-blue">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Location</p>
                                        <p className="text-lg font-semibold text-slate-800">{project.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-slate-50 p-3 rounded-full text-brand-blue">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Duration</p>
                                        <p className="text-lg font-semibold text-slate-800">{project.duration}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-slate-50 p-3 rounded-full text-brand-blue">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Handover</p>
                                        <p className="text-lg font-semibold text-slate-800">{project.completionDate}</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-slate-100 mb-8" />

                            <h4 className="text-lg font-bold text-brand-blue mb-4">Scope of Work</h4>
                            <ul className="space-y-3 mb-8">
                                {project.scope.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-brand-gold shrink-0" />
                                        <span className="text-slate-600">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h4 className="text-lg font-bold text-brand-blue mb-4">Core Materials</h4>
                            <ul className="space-y-3">
                                {project.materials.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                                        <span className="text-slate-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
