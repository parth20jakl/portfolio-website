import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <p className="mb-4 text-blue-500 font-semibold">
          👋 Hello, I'm
        </p>

        <h1 className="text-6xl font-extrabold tracking-tight">
          Parth Jayant Kulkarni
        </h1>

        <h2 className="mt-5 text-2xl text-muted-foreground">
          AI & Machine Learning Engineer
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
          Passionate about building AI-powered applications, solving
          real-world problems using Machine Learning, Deep Learning,
          Computer Vision, and Full-Stack Development.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg">
            View Projects
          </Button>

          <Button size="lg" variant="outline">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}