const GradientWrapper = ({ children, ...props }: any) => (
  <div
    {...props}
    className={`relative overflow-hidden my-16 border-t sm:my-28 ${
      props.className || ''
    }`}
  >
    <div className="relative overflow-hidden">
  {/* Fondo desenfocado con tonos morados */}
  <div
    className="blur-[100px] absolute inset-0 w-full h-full pointer-events-none"
    style={{
      background: 
        'linear-gradient(202.72deg, rgba(123, 97, 255, 0.1) 15%, rgba(182, 123, 255, 0.07) 35%, rgba(202, 167, 255, 0) 85%)',
    }}
  />
  
  {/* Contenido principal en primer plano */}
  <div className="relative z-10">
    {children}
  </div>
</div>

</div>
);

export default GradientWrapper;
