declare global {
  interface Window {
    grecaptcha: any;
  }
}

export {};


export const executeCaptcha = async (action: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!window.grecaptcha) {
      reject("reCAPTCHA not loaded");
      return;
    }

    window.grecaptcha.enterprise.ready(async () => {
      try {
        const token = await window.grecaptcha.enterprise.execute(
          "6LfJH7osAAAAAMJE8t9HDp4DfFZX42DFnB8dH-33",
          { action }
        );
        resolve(token);
      } catch (err) {
        console.error("reCAPTCHA execution error:", err);
        reject(err);
      }
    });
  });
};
