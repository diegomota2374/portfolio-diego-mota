import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { useInView } from "react-intersection-observer";

// Define variants for sliding and fading effects
const slideIn = {
  hidden: { x: "-10%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const WhyMe = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const { ref, inView } = useInView({
    triggerOnce: false, // Ensures that the animation can be reactivated
    threshold: 0.4,
  });

  return (
    <>
      {/* SEO configuration for the "Why Buzzvel" section */}
      <NextSeo
        title="Por que Eu"
        description="Descubra por que Diego Mota Cavalcante está entusiasmado com a oportunidade de ingressar no mercado, com foco em inovação, abordagens centradas no cliente e experiência dedicada."
        openGraph={{
          title: "Por que Eu",
          description:
            "Descubra por que Diego Mota Cavalcante está entusiasmado com a oportunidade de ingressar no mercado, com foco em inovação, abordagens centradas no cliente e experiência dedicada.",
          url: `${baseUrl}/#por-que-Eu`, // Fixed ID to match URL
          site_name: "portfolio-diego-mota",
        }}
      />
      <section
        id="por-que-Eu"
        className="py-12 px-4 sm:px-6 lg:px-8 bg-lightBackground dark:bg-darkBackground"
        ref={ref}
        data-testid="why-buzzvel-section"
      >
        <div className="container mx-auto">
          <h2
            className={`text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8 ${
              inView ? "animate-fadeIn" : ""
            }`}
            data-testid="why-buzzvel-heading"
          >
            Por que Eu?
          </h2>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideIn}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-8"
              data-testid="why-buzzvel-innovation"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Inovação no Centro do Meu Trabalho
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Tenho uma forte paixão por novas tecnologias e inovação. Estou
                sempre em busca de maneiras de integrar as últimas tendências e
                tecnologias em meu trabalho, alinhando-me perfeitamente com o
                compromisso de definir tendências e explorar novas
                possibilidades.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideIn}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-8"
              data-testid="why-buzzvel-customer-centric"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Foco no Cliente
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Acredito na importância de entender profundamente as
                necessidades dos clientes e em criar soluções que atendam e
                superem suas expectativas. Meu objetivo é sempre garantir que o
                trabalho que realizo esteja alinhado com os objetivos dos
                clientes e ajude a alcançar seus sucessos.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideIn}
              transition={{ duration: 1, delay: 0.9 }}
              className="mb-8"
              data-testid="why-buzzvel-dedicated-expertise"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Expertise e Dedicação
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Vejo meu papel como desenvolvedor não apenas como um executor de
                tarefas, mas como um parceiro estratégico no sucesso dos
                projetos. Estou comprometido em entregar produtos de alta
                qualidade que realmente façam a diferença e contribuam para o
                crescimento e sucesso dos clientes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyMe;
