type buttonVariation = 'button--secondary';

export default interface IButton {
  onClick: () => void;
  text: string;  
  variation?: buttonVariation;
};
