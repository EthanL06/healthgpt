"use client";

const Process = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <article className="prose prose-h1:text-center pt-4 px-6">
      <h1>Our Process</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Vitae turpis massa
        sed elementum tempus egestas sed. Adipiscing vitae proin sagittis nisl
        rhoncus. Enim tortor at auctor urna. Nec ultrices dui sapien eget mi
        proin sed libero. Ac feugiat sed lectus vestibulum. Mauris commodo quis
        imperdiet massa tincidunt nunc pulvinar. Iaculis nunc sed augue lacus
        viverra vitae congue eu consequat. Id leo in vitae turpis massa. Nunc
        consequat interdum varius sit amet mattis vulputate enim. Eu non diam
        phasellus vestibulum lorem sed risus ultricies. Velit sed ullamcorper
        morbi tincidunt ornare massa eget egestas. Blandit cursus risus at
        ultrices mi. Ut lectus arcu bibendum at varius vel. Libero id faucibus
        nisl tincidunt eget nullam non.
      </p>
      <p>
        Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.
        Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis.
        Nunc lobortis mattis aliquam faucibus purus in massa. In hac habitasse
        platea dictumst. Quis blandit turpis cursus in hac habitasse platea
        dictumst. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.
        Nulla at volutpat diam ut. Porta lorem mollis aliquam ut porttitor leo a
        diam. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl.
        Egestas sed sed risus pretium quam vulputate dignissim suspendisse in.
        Arcu non odio euismod lacinia at quis risus. Faucibus purus in massa
        tempor nec feugiat nisl pretium fusce. Eget lorem dolor sed viverra
        ipsum nunc aliquet bibendum enim. Eleifend quam adipiscing vitae proin
        sagittis nisl. Gravida arcu ac tortor dignissim convallis aenean.
        Eleifend mi in nulla posuere sollicitudin aliquam ultrices.
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
