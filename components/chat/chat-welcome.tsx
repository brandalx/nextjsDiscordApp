interface ChatWelcomeProps {
  type: string;
  name: string;
}
const ChatWelcome = ({ type, name }: ChatWelcomeProps) => {
  return (
    <div>
      Welcome to the {type} {name}
    </div>
  );
};

export default ChatWelcome;
