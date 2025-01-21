import React from 'react'

const HeroHeader = ({title, description}) => {

//   if (!title) {
//     const title = "Default title";
//   }
//   if (!description) {
//     const description = "Default description";
//   }
  return (
    <section className="flex flex-col gap-2 mb-4r py-2r px-6r">
        <h1 className="text-5r font-semibold w-40r">
            {title}
        </h1>
        <p className="text-c-white-50 text-p">
            {description}
        </p>
    </section>
)};

export default HeroHeader;