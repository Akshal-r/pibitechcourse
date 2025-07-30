import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactModal from "@/components/ContactModal";
import FeatureCard from "@/components/FeatureCard";
import ModuleCard from "@/components/ModuleCard";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import BrochureForm from "@/components/BrochureForm";
import {
  Rocket,
  Code,
  Users,
  Award,
  Github,
  Briefcase,
  Brain,
  Database,
  Cloud,
  TrendingUp,
  Download,
  CheckCircle,
  Zap,
  Target,
  Star,
  Clock,
  Calendar,
  Monitor,
  Trophy,
} from "lucide-react";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isBrochureFormOpen, setIsBrochureFormOpen] = useState(false);

  const features = [
    {
      icon: Rocket,
      title: "Launch your own AI-powered product",
      description:
        "Not a simulation or group project. Your idea, built from scratch and deployed live.",
    },
    {
      icon: Users,
      title: "Pitch to real VCs with mentorship",
      description:
        "Refine your deck, sharpen your story, and meet actual investors.",
    },
    {
      icon: Award,
      title: "Get certified as an AI Product Developer",
      description: "With internship-grade experience, not just theory.",
    },
    {
      icon: Github,
      title: "Build a GitHub-backed portfolio",
      description:
        "Show off your code, ship a working demo, and prove your skills.",
    },
    {
      icon: Briefcase,
      title: "Unlock placement support",
      description:
        "With resume reviews, mock interviews, and referrals to top product companies.",
    },
  ];

  const modules = [
    {
      number: "1",
      title: "AI Product Design & Prototyping",
      description:
        "Design thinking, user personas, user journeys, rapid prototyping using tools like Figma, Miro, Voiceflow.",
    },
    {
      number: "2",
      title: "Programming Fundamentals & Backend Setup",
      description:
        "Python, Go, and JS fundamentals, REST APIs, JSON, LLM integration using FastAPI and Postman.",
    },
    {
      number: "3",
      title: "Full-Stack App Development",
      description:
        "Build UIs with React and Tailwind, backend with Flask/FastAPI, connect AI APIs to DB.",
    },
    {
      number: "4",
      title: "Databases for AI",
      description:
        "RDBMS, NoSQL, vector databases, graph databases like PostgreSQL, MongoDB, Neo4j, Pinecone.",
    },
    {
      number: "5",
      title: "Data Engineering & Pipelines",
      description:
        "Build ETL/ELT pipelines, perform data cleaning, batch vs streaming using Airflow, Pandas, Spark.",
    },
    {
      number: "6",
      title: "AI & ML Essentials",
      description:
        "ML lifecycle, supervised learning, feature engineering, model evaluation, deployment with Scikit-learn and TensorFlow.",
    },
    {
      number: "7",
      title: "Generative AI & LLMs",
      description:
        "GPT-4, Claude, Mistral, Llama3, prompt engineering, and LLM app development using LangChain and Hugging Face.",
    },
    {
      number: "8",
      title: "Retrieval-Augmented Generation (RAG)",
      description:
        "Chunking, embedding pipelines, retrieval systems using FAISS, Weaviate, LangChain.",
    },
    {
      number: "9",
      title: "AI Agents & Agentic Workflows",
      description:
        "Agent architecture, planning, memory, execution, tools like CrewAI, LangGraph, AutoGPT.",
    },
    {
      number: "10",
      title: "Cloud & DevOps for AI",
      description:
        "Docker, GitLab CI/CD, microservices, deployment to AWS/GCP, API gateway setup.",
    },
    {
      number: "11",
      title: "AI Product Strategy & Business",
      description:
        "Build business models, understand governance, ethics, and monetization strategies.",
    },
    {
      number: "12",
      title: "Go-To-Market & Product-Led Growth",
      description:
        "Positioning, messaging, PLG frameworks, feedback loops using tools like HubSpot, Mixpanel, SEMrush.",
    },
  ];

  const differentiators = [
    {
      icon: Target,
      title: "You ship a real product",
      description:
        "A full-stack, AI-powered app that's demoable, fundable, and hosted.",
    },
    {
      icon: Star,
      title: "You own your IP",
      description: "Everything you build belongs to you. No catch.",
    },
    {
      icon: TrendingUp,
      title: "You pitch to VCs",
      description:
        "Build a real pitch deck, get feedback, and access our investor network.",
    },
    {
      icon: Zap,
      title: "Your product goes live",
      description:
        "We provide hosting and GTM support to make sure it doesn't sit in a folder.",
    },
    {
      icon: Trophy,
      title: "You leave with proof",
      description:
        "Internship certificate, GitHub portfolio, and a working product.",
    },
    {
      icon: Briefcase,
      title: "You get placement support",
      description:
        "We help you land roles in top product companies — not just list job boards.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative py-20 lg:py-32 overflow-hidden mt-16"
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in-up">
              <div className="space-y-4">
                <Badge className="bg-accent text-accent-foreground">
                  🚀 AI Product Developer Program
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Become an{" "}
                  <span className="gradient-text">AI Product Developer</span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-muted-foreground">
                  Build, Pitch & Launch Your Own AI App
                </h2>
                <p className="text-lg text-muted-foreground max-w-lg">
                  We don't make you learn AI; we make you build it.
                  <br></br>
                  In just 45 days, you'll design, build, deploy, and pitch your
                  own AI product — and you'll own every line of it.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="btn-primary text-lg px-8 py-6"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Join the Course
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-secondary text-lg px-8 py-6"
                  onClick={() => setIsBrochureFormOpen(false)}
                >
                  <Download className="mr-2 h-5 w-5 text-white" />
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="fade-in-up lg:fade-in">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* What You Actually Get */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What You Actually Get
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real outcomes, not just certificates
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={`${index * 100}ms`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Full-Stack AI Curriculum */}
      <section id="curriculum" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Full-Stack AI. Every Layer.{" "}
              <span className="gradient-text">No Fluff.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You'll master the complete AI product lifecycle — from idea to
              code to cloud to business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <ModuleCard
                key={index}
                number={module.number}
                title={module.title}
                description={module.description}
                delay={`${index * 50}ms`}
              />
            ))}
          </div>
          <Card className="mt-12 bg-gradient-card border-border fade-in-up">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Capstone Project</h3>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                You'll apply everything by building your own AI product —
                prototype to MVP to deployment — and prepare it for pitch and
                launch.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Makes This Program Different
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                delay={`${index * 100}ms`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section id="details" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Program Details
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="card-hover bg-gradient-card border-border text-center fade-in-up">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Duration</h3>
                <p className="text-muted-foreground">60 hours</p>
              </CardContent>
            </Card>
            <Card
              className="card-hover bg-gradient-card border-border text-center fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Timeline</h3>
                <p className="text-muted-foreground">45 days</p>
              </CardContent>
            </Card>
            <Card
              className="card-hover bg-gradient-card border-border text-center fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <CardContent className="p-6">
                <Monitor className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Format</h3>
                <p className="text-muted-foreground">Online (Live + async)</p>
              </CardContent>
            </Card>
            <Card
              className="card-hover bg-gradient-card border-border text-center fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Batches</h3>
                <p className="text-muted-foreground">Weekday & Weekend</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-card border-border fade-in-up">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-2" />
                    Level & Prerequisites
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Intermediate</strong> - Ideal for students, career
                    switchers, and early-career developers
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Trophy className="h-5 w-5 text-primary mr-2" />
                    Outcome
                  </h3>
                  <p className="text-muted-foreground">
                    A launched AI product, internship-grade experience, pitch
                    readiness, and job-focused skills
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto fade-in-up">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Turn your idea into a launched AI product
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              And turn your skill set into a career.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-6 shadow-large"
                onClick={() => setIsContactModalOpen(true)}
              >
                Join the Course
              </Button>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-6 shadow-large"
                onClick={() => setIsBrochureFormOpen(true)}
              >
                <Download className="mr-2 h-5 w-5 " />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <BrochureForm
        isOpen={isBrochureFormOpen}
        onClose={() => setIsBrochureFormOpen(false)}
      />
    </div>
  );
};

export default Index;
