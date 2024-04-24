import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";

type ContactsProps = {
  contacts: {
    email: string;
    phone: number;
  };
};

const Contacts = memo(({ contacts }: ContactsProps) => {
  return (
    <>
      <AppHead title="Contacts" description="" />
      <div>Contacts</div>
      <div>{contacts.email}</div>
      <div>{contacts.phone}</div>
    </>
  );
});
Contacts.displayName = "Contacts";

export default Contacts;

export async function getStaticProps({}: GetStaticPropsContext<{}>): Promise<
  GetStaticPropsResult<ContactsProps>
> {
  const contacts = {
    email: "prova@gmail.com",
    phone: Math.random(),
  };

  return {
    props: {
      contacts,
    },
  };
}
