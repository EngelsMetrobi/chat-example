
import { useCallback, useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default function HomeScreen() {

  const [messages, setMessages] = useState<any>([])

  useEffect(() => {
    setMessages([
    {
      _id: 1,
      text: 'Hello Engels, what is your doubt?',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Maria',
        avatar: 'https://images.icon-icons.com/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png',
      },
    },
    {
      _id: 2,
      text: 'Hello, yes we can!',
      createdAt: new Date(),
      user: {
        _id: 3,
        name: 'João',
        avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858485.png',
      },
    },
    {
      _id: 3,
      text: 'Hello, can you help me?',
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'Você',
        avatar: "https://cdn-icons-png.flaticon.com/512/6858/6858485.png"
      },
    },
  ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages:any) =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages:any) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}
