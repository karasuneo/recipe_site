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

        <form>
          <div className={styles.item}>
            <label for="email"></label>
            <input
              type="email"
              name="email"
              required="required"
              placeholder="Email Address"
            ></input>
          </div>
          <div className={styles.item}>
            <label for="password"></label>
            <input
              type="password"
              name="password"
              required="required"
              placeholder="Password"
            ></input>
          </div>
          <div className={styles.panel}>
            <input
              type="submit"
              className={styles.button}
              title="Sign In"
              value="Sign In"
            ></input>
          </div>
        </form>

        <div className={styles.footer}>
          <div className={styles.googlebutton}>
            <I
              src="/google_login_icon/btn_google_signin_light_normal_web.png"
              className={styles.shadow}
              width={200}
              height={50}
              alt="googleでサインイン(normal)"
            />
            <Image
              src="/google_login_icon/btn_google_signin_light_focus_web.png"
              className={styles.noshadow}
              width={200}
              height={50}
              alt="googleでサインイン(hover)"
            />
            <style jsx global>{`
              .avatar {
                border-radius: 50%;
              }
            `}</style>
          </div>

          <p>
            <a href="#">Create an account</a>
          </p>
          <p>
            <a href="#">Forgot password?</a>
          </p>
        </div>
      </div>

      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
