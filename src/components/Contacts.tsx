import ContactButton from './ContactButton.tsx';

export default function Contacts() {
  return (
    <div className="flex gap-8">
      <ContactButton icon={'github'} />
      <ContactButton icon={'notion'} />
      <ContactButton icon={'email'} />
      <ContactButton icon={'phone'} />
    </div>
  );
}
