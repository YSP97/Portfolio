import ContactButton from './ContactButton.tsx';

export default function Contacts() {
  return (
    <div className="flex gap-8">
      <ContactButton icon={'github'} link="https://github.com/YSP97" />
      <ContactButton
        icon={'notion'}
        link="https://opaque-parade-b25.notion.site/c7e2c7c4929442b986ef2e1e3d668b8e?pvs=74"
      />
      <ContactButton icon={'email'} />
      <ContactButton icon={'phone'} />
    </div>
  );
}
