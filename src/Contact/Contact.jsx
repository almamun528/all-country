import React from "react";

const Contact = () => {
  return (
    <>
      <section className="bg-gray-300 p-3">
        <div className="w-8/12 mx-auto my-4 space-y-5 bg-gra">
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input type="text" className="grow" placeholder="Daisy" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input type="text" className="grow" placeholder="daisy@site.com" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <span className="badge badge-info">Optional</span>
          </label>
        </div>
      </section>
    </>
  );
};

export default Contact;
