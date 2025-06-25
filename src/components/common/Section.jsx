import { cn } from "../../lib/utils";

export const Section = ({
  children,
  className = "",
  containerClassName = "",
  background = "white",
  padding = "default",
  maxWidth = "content",
  ...props
}) => {
  const paddingClasses = {
    none: "",
    sm: "py-12 px-4 md:px-8",
    default: "py-16 px-4 md:py-24 md:px-8",
    lg: "py-24 px-4 md:py-32 md:px-8",
  };

  const maxWidthClasses = {
    full: "w-full",
    container: "max-w-[1440px]",
    content: "max-w-[1140px]",
    text: "max-w-4xl",
  };

  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    primary: "bg-primary",
    gradient: "bg-gradient-to-b from-primary-50 to-white",
  };

  return (
    <section
      className={cn(
        "w-full",
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      <div
        className={cn("mx-auto", maxWidthClasses[maxWidth], containerClassName)}
      >
        {children}
      </div>
    </section>
  );
};

export const SectionHeader = ({
  title,
  subtitle,
  description,
  centered = true,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered && "items-center text-center",
        className
      )}
    >
      {subtitle && (
        <span className="text-sm font-medium text-primary-600 tracking-wide uppercase">
          {subtitle}
        </span>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
};
