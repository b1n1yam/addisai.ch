import Container from "./global/container";
import Wrapper from "./global/wrapper";

const FinetuneSection = () => {
  return (
    <div className="w-full z-10">
      <div className=" flex w-full h-[150px]   bg-linear-to-b from-transparent via-black/90 to-black pointer-events-none  " />

      <div className="flex justify-center items-center text-center">
        <div className=" min-w-full  bg-black z-40 ">
          <Wrapper>
            <Container>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Fine-Tune with AddisAI
              </h2>
              <p className="  text-center mb-8 px-4 md:px-0">
                Customize your AI models to better suit your specific needs and
                industry requirements. Our fine-tuning services help you achieve
                higher accuracy and relevance in your AI applications.
              </p>
              <div className="py-16">
                {/* Top gradient border */}
                <div className="w-full h-0.5 bg-gradient-to-l from-transparent via-gray-600 to-transparent" />

                {/* Comparison section */}
                <div className="flex justify-between items-stretch space-x-6 ">
                  {/* RAG Section */}
                  <div className="flex-1 py-8">
                    <h3 className="text-xl font-semibold mb-3 ">
                      Retrieval-Augmented Generation (RAG)
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      RAG combines external knowledge retrieval with a language
                      model. Instead of retraining the model, it searches for
                      the most relevant context in real time—making it ideal for
                      continuously updated information, domain-specific Q&A, or
                      multi-source reasoning.
                    </p>
                    <ul className="mt-4 text-gray-400 list-disc list-inside space-y-1">
                      <li>No retraining required</li>
                      <li>Scales easily with new data</li>
                      <li>
                        Ideal for customer support, documentation, and
                        search-based tasks
                      </li>
                    </ul>
                  </div>
                  {/* Vertical separator */}13
                  <div className="w-0.5  bg-gray-600 to-transparent" />
                  {/* Fine-tuning Section */}
                  <div className="flex-1 py-8">
                    <h3 className="text-xl font-semibold mb-3">Fine-tuning</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Fine-tuning adapts a base model by training it on your own
                      dataset—great for teaching it a company’s tone, domain
                      jargon, or specialized workflow logic. It performs best
                      when patterns and responses are consistent and repeatable.
                    </p>
                    <ul className="mt-4 text-gray-400 list-disc list-inside space-y-1">
                      <li>Requires training resources and data preparation</li>
                      <li>Offers high consistency for repetitive tasks</li>
                      <li>Best for personalization or structured outputs</li>
                    </ul>
                  </div>
                </div>

                {/* Bottom gradient border */}
                <div className="w-full h-0.5 bg-gradient-to-l from-transparent via-gray-600 to-transparent" />
              </div>
            </Container>
          </Wrapper>
        </div>
      </div>
      <div className=" flex w-full h-[150px]   bg-linear-to-b from-black via-black/90 to-transparent pointer-events-none  " />
    </div>
  );
};

export default FinetuneSection;
