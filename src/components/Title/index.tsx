import './style.module.css';

type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <h1 dangerouslySetInnerHTML={{__html: title}} />
  );
}