import { Container } from './style';

type ParagraphProps = {
  text?: string;
};

export const Paragraph = ({ text }: ParagraphProps) => {
  return <Container>{text}</Container>;
};
