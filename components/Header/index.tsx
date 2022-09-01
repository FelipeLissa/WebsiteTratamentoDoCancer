import { Avatar, Dropdown, Grid, Text, User } from "@nextui-org/react";
import Link from "next/link";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <Link href={""}>
        <img src={"./logo22.png"} className="header-logo"></img>
      </Link>
      <Link href={""}>
        <a>Destinations</a>
      </Link>
      <Link href={""}>
        <a>Hotels</a>
      </Link>
      <Link href={""}>
        <a>Flights</a>
      </Link>
      <Link href={""}>
        <a>Bookings</a>
      </Link>
      <Link href={""}>
        <a>Login</a>
      </Link>
      <Link href={""}>
        <a>
          <button className="sign">Sign up</button>
        </a>
      </Link>
      <Link href={""}>
        <a>EN</a>
      </Link>
    </Container>
  );
}
