export default function CarouselCard({ route, alt }) {
  return (
    <div className="relative flex items-end overflow-hidden bg-gray-100 rounded-lg shadow-lg h-80 group mx-1">
      <img
        src={route}
        alt={alt}
        className="object-cover w-full h-full object-center transition duration-200 group-hover:scale-110"
      />

      <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>
    </div>
  );
}
