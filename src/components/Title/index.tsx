
export type ITitleProps = { 
  children: string;
}

export const Title = ({ children }: ITitleProps) => {
  return (
    <h1>
      {children}
    </h1>
  )
}
