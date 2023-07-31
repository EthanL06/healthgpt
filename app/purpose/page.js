const Purpose = () => {
  return (
    <article className="prose prose-h1:text-center pt-4 px-auto lg px-6">
      <h1>Our Purpose</h1>
      <p className="lead">
        Our innovative HealthGPT-based website has a dual mission: to address
        the challenges of burnout commonly faced by doctors and to reduce the
        risk of misdiagnoses, which can have severe consequences on patient
        outcomes. In the United States alone, 12 million patients are
        misdiagnosed every year, resulting in nearly 370,000 deaths.
        Furthermore, an alarming 63% of physicians report symptoms of burnout
        while caring for patients. Recognizing these critical issues, our
        website steps in to alleviate the problem by providing doctors with a
        powerful and reliable helping hand in diagnosing medical conditions more
        accurately and efficiently.
      </p>
      <p>
        To tackle the issue of misdiagnoses, our website acts as a crucial
        safeguard by cross-referencing symptoms with a vast database of medical
        information. It considers a wide range of potential conditions and
        factors, even rare or overlooked possibilities that may have been missed
        otherwise, significantly reducing the risk of misdiagnoses and ensuring
        patients receive appropriate and timely care. Simultaneously, we
        acknowledge the demanding nature of the healthcare industry and the
        immense responsibility placed on doctors, which puts them at a high risk
        of burnout. To counter this, our website streamlines the diagnostic
        process, saving valuable time and effort for doctors. By providing
        real-time feedback and comprehensive insights, it reduces the burden on
        their cognitive load, facilitating more accurate diagnoses, and
        promoting a healthier work-life balance.
      </p>

      <p>
        Our website enhances doctors' diagnostic capabilities by leveraging
        advanced artificial intelligence and natural language processing. It
        analyzes the symptoms provided and offers real-time, data-driven
        insights, drawing from vast medical knowledge and up-to-date research.
        This intelligent feedback empowers doctors to make well-informed
        decisions, explore alternative possibilities, and ensure comprehensive
        evaluations of patient conditions.
      </p>

      <p>
        In a spirit of collaboration, our website fosters a community where
        doctors can share their insights and knowledge of rare diseases through
        a dedicated forum section. In complex cases, it facilitates seeking
        input from peers or consulting specialists from various disciplines,
        further strengthening the accuracy of diagnoses. This synergy between AI
        and human expertise creates a reliable and efficient diagnostic process,
        leading to improved patient outcomes.
      </p>

      <p>
        Continuing to evolve, the HealthGPT-based website continuously updates
        its knowledge base with the latest medical advancements, research
        findings, and best practices. This ensures that doctors always have
        access to the most current and evidence-based information, further
        reducing the possibility of misdiagnoses and elevating the overall
        quality of healthcare provided.
      </p>

      <p>
        In conclusion, our HealthGPT-based website serves as a transformative
        tool for doctors, empowering them with real-time feedback, minimizing
        the risk of misdiagnoses, and ultimately providing better care for their
        patients. By harnessing the power of AI in the medical field, we aim to
        revolutionize diagnostic processes, making them more accurate, reliable,
        and patient-centric.
      </p>

      <div className="flex btn btn-ghost items-center font-bold">
        <label>Back to top</label>
        <button className="">
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

export default Purpose;
