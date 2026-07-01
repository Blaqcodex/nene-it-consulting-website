import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../validation/contactSchema";
import toast from "react-hot-toast";

export default function ContactModal({ open, onClose }) {
    
    const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    } = useForm({
    resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    console.log(result);

    if (result.success) {

    toast.success(
        "Project submitted successfully! We'll contact you soon."
    );

    reset();

    onClose();
}

  } catch (error) {
    console.error(error);
    toast.error("Failed to submit project. Please try again.");
  }
};

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ duration: 0.35 }}
            className="
              fixed
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-[60]

              w-[92%]
              max-w-2xl

              rounded-3xl

              border border-white/10
              bg-[#0b1020]/95
              backdrop-blur-xl

              p-10
            "
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold">
                  Start Your Project
                </h2>

                <p className="text-white/60 mt-2">
                  Let's build something amazing together.
                </p>
              </div>

              <button
                onClick={onClose}
                className="text-3xl text-white/50 hover:text-white"
              >
                ×
              </button>
            </div>

            <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            >

              <div>
  <input
    {...register("name")}
    placeholder="Full Name"
    className={`
      w-full
      rounded-xl
      bg-white/5
      p-4
      outline-none
      transition

      ${
        errors.name
          ? "border border-red-500"
          : "border border-white/10 focus:border-orange-400"
      }
    `}
  />

  {errors.name && (
    <p className="text-red-400 text-sm mt-2">
      {errors.name.message}
    </p>
  )}
</div>

              <input
  {...register("company")}
  placeholder="Company"
  className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-orange-400"
/>

              <div>
  <input
    {...register("email")}
    placeholder="Email Address"
    className={`
      w-full
      rounded-xl
      bg-white/5
      p-4
      outline-none
      transition

      ${
        errors.email
          ? "border border-red-500"
          : "border border-white/10 focus:border-orange-400"
      }
    `}
  />

  {errors.email && (
    <p className="text-red-400 text-sm mt-2">
      {errors.email.message}
    </p>
  )}
</div>

              <div>
  <textarea
    {...register("message")}
    rows={6}
    placeholder="Tell us about your project..."
    className={`
      w-full
      rounded-xl
      bg-white/5
      p-4
      outline-none
      resize-none
      transition

      ${
        errors.message
          ? "border border-red-500"
          : "border border-white/10 focus:border-orange-400"
      }
    `}
  />

  {errors.message && (
    <p className="text-red-400 text-sm mt-2">
      {errors.message.message}
    </p>
  )}
</div>

              <button
  type="submit"
  disabled={isSubmitting}
  className="
    w-full
    py-4
    rounded-xl
    font-semibold
    bg-gradient-to-r
    from-orange-500
    to-purple-600
    transition
    hover:scale-[1.02]
    disabled:opacity-60
    disabled:cursor-not-allowed
    disabled:hover:scale-100
  "
>
<>
  {isSubmitting ? (
    <span className="flex items-center justify-center gap-3">
      <span
        className="
          w-5
          h-5
          border-2
          border-white/30
          border-t-white
          rounded-full
          animate-spin
        "
      />
      Sending...
    </span>
  ) : (
    "Submit Project"
  )}
</>
</button>

            </form>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}