type ProjectCardProps = {
  imageURL: string;
  desc: string;
};

export const ProjectCard = ({ imageURL, desc }: ProjectCardProps) => {
  return (
    <div className="w-80 h-115 border-2 border-white rounded p-3 overflow-hidden">
      <img src={imageURL} alt={imageURL} className="h-2/4 w-full rounded" />

      {/* Scrollable paragraph */}
      <p className="h-2/4 overflow-y-auto pt-5">{desc}</p>
    </div>
  );
};
