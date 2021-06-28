
type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <h1 style={{ fontSize: '48px' }} dangerouslySetInnerHTML={{__html: title}} />
  );
}
