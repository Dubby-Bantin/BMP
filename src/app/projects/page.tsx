import Footer from "@/components/footer";

export default function ProjectsPage() {
  return (
    <>
      <section className="md:px-20 py-20 max-w-4xl mx-auto mb-10">
        <div id="video" className="w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/e6qHYZhnMlc"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
}
