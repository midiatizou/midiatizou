
type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <h1 style={{ fontSize: '48px', color: '#ffffff' }} dangerouslySetInnerHTML={{__html: title}} />
  );
}
