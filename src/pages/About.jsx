import Container from "../components/layout/Container";
import React from "react";

function About() {
  return (
    <>
      {/* Intro Section */}
      <section className="py-24 bg-emerald-50">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6 text-stone-900">
              About <span className="text-emerald-700">Matcha Mile</span>
            </h1>

            <p className="text-lg text-stone-600">
              Matcha Mile is more than a café. It’s a calm space created
              for people who appreciate slow mornings, intentional
              coffee, and mindful living.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
              alt="Cafe interior"
              className="rounded-3xl object-cover"
            />

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Our Story
              </h2>

              <p className="text-stone-600 mb-4">
                Born from a love for matcha, coffee, and calm spaces,
                Matcha Mile was created as a response to fast-paced
                café culture.
              </p>

              <p className="text-stone-600">
                We believe great coffee should slow you down — giving
                you space to think, connect, and enjoy the moment.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-emerald-50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-14">
            What We Stand For
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-3">
                Mindful Brewing
              </h3>
              <p className="text-stone-600">
                Every cup is crafted with patience, precision,
                and care — never rushed.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-3">
                Clean Ingredients
              </h3>
              <p className="text-stone-600">
                We focus on quality beans, ceremonial matcha,
                and simple ingredients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-3">
                Calm Spaces
              </h3>
              <p className="text-stone-600">
                Designed for focus, conversations, and moments
                of stillness.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing Image Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                A Space to Slow Down
              </h2>

              <p className="text-stone-600">
                Whether you visit us for your morning ritual or
                an afternoon break, Matcha Mile is designed to
                help you pause and enjoy the moment.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
              alt="Coffee cup"
              className="rounded-3xl object-cover"
            />
          </div>
        </Container>
      </section>
    </>
  );
}

export default About;
