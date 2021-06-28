
type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <h1 style={{ fontSize: '48px', color: '#D5D5D5' }} dangerouslySetInnerHTML={{__html: title}} />
  );
}
