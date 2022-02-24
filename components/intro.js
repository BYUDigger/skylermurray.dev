import { CMS_NAME } from '../lib/constants'

export default function Intro() {
  return (
    <div>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Skyler Murray
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          Software Engineer, Musician, and more...
        </h4>
      </section>
      <section className="flex flex-col items-center max-w-4xl m-auto">
        <p className="mt-8 mb-8">
          I'm a software developer in Redmond, Washington. I enjoy full-stack development and building products to delight customers and solve interesting problems.
          I'm at home building green field code as well as working in existing code bases. I have a passion for debugging difficult problems, documentation, spreading knowledge and mentoring.
          I have an interesting path to working in tech. I completed an undergraduate degree in Music with a minor in Computer Science before pivoting to a Computer Science Masters.
        </p>
        <p className="mb-8">
          Outside of my day job I can be found out biking, playing with my kids, rock hounding, gardening, and playing boards games with friends and family.
        </p>
      </section>
    </div>
  )
}
