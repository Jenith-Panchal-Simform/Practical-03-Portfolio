export const About = () => {
  return (
    <section
      className="text-white flex-5 flex flex-col py-20 px-20 gap-20"
      id="about"
    >
      {/* About */}
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#A6BBCC]">
          about
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          reiciendis aut repellendus corporis ipsa nesciunt vero ipsam at atque
          modi? Saepe accusamus quae, sed quos voluptate nam cumque nihil qui.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sunt.
          Dignissimos natus incidunt ipsum nulla debitis, nobis odio,
          repellendus sequi ipsam totam, rerum obcaecati fuga voluptatibus
          facilis consequuntur at labore. Mollitia sapiente explicabo
          repellendus, fugiat, consequatur repudiandae dolorum laborum ipsa eum
          aliquid voluptates a? Eaque molestias voluptate quos illo, tempora
          vitae laudantium iure repellat voluptates, exercitationem id
          doloremque ut iusto. Aliquam, unde architecto. Quisquam, ut veritatis
          nesciunt sequi eligendi a. Culpa sed voluptas dolore amet sapiente
          corrupti odio, blanditiis dignissimos quos fugit aliquam aliquid
          doloribus. Placeat earum dignissimos esse harum! Labore, debitis
          quidem, illo asperiores ratione ipsum ex aliquam harum error maiores
          repellat, placeat vero culpa incidunt numquam! Illo amet cumque
          sapiente odit nobis sed rem nihil fugit sunt at!
        </p>
      </div>
      <div className="flex justify-around">
        <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold">React</h2>
        <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold">Node</h2>
        <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold">Java</h2>
      </div>
    </section>
  );
};
