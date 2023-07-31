"use client";

const Process = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <article className="prose prose-h1:text-center pt-4 px-6">
      <h1>Our Process</h1>
      <p className="lead">
        In our pursuit of developing a cutting-edge solution for medical
        diagnostics, we embarked on a two-fold strategy to harness the power of
        natural language processing.
      </p>
      <p>
        Initially, we carefully selected a lightweight large language model
        (LLM) that had already undergone pre-training on a vast corpus of
        diverse text, encompassing billions of parameters. This pre-trained
        model exhibited a remarkable understanding of language and could
        generate coherent responses to a wide array of queries. However,
        recognizing the unique demands of our medical diagnostics use case, we
        understood the significance of fine-tuning the model to ensure its
        seamless integration with our specific requirements.
      </p>

      <p>
        To accomplish this, we meticulously curated a comprehensive dataset
        comprising medical diagnostics information, featuring an array of
        symptoms, conditions, and diagnostic insights. This dataset served as
        the bedrock for the fine-tuning process, providing the model with an
        accurate and tailored source of data to draw upon during its learning
        phase.
      </p>

      <p>
        Through fine-tuning, we sought to imbue the model with domain-specific
        knowledge, enabling it to grasp intricate medical terminologies,
        identify subtle symptomatology, and deliver precise and contextually
        relevant diagnostic information. The convergence of a pre-trained
        lightweight LLM model with a targeted medical diagnostics dataset served
        as the cornerstone of our endeavor, empowering us to provide a
        sophisticated and trustworthy AI-driven solution for medical
        practitioners and patients alike.
      </p>

      <div
        onClick={scrollToTop}
        className="flex btn btn-ghost items-center font-bold"
      >
        <label>Back to top</label>
        <button>
          <UpArrow />
        </button>
      </div>
    </article>
  );
};

const UpArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  );
};
export default Process;
