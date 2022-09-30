import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

import styles from "../styles/index.module.css";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    console.log(session);
  }
  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <div className={styles.wrapper}>
        <h1>Sign In</h1>
        <div className={styles.footer}>
          <div className={styles.googlebutton}>
            <div className={styles.shadow}>
              <Image
                src="/google_login_icon/btn_google_signin_light_normal_web.png"
                width={200}
                height={50}
                alt="googleでサインイン(normal)"
              />
            </div>
            <div className={styles.noshadow}>
              <Image
                src="/google_login_icon/btn_google_signin_light_focus_web.png"
                className={styles.noshadow}
                onClick={() => signIn()}
                width={200}
                height={50}
                alt="googleでサインイン(hover)"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
