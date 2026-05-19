import { useNavigate } from "react-router-dom";

const MoreTestimonialsButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/testimonials")}
      className="inline-flex items-center gap-2 border border-gold/40 px-8 py-3 text-xs font-medium uppercase tracking-[0.22em] text-gold transition-all duration-300 hover:bg-gold hover:text-tech-dark"
    >
      More Testimonials <span aria-hidden="true">→</span>
    </button>
  );
};

export default MoreTestimonialsButton;