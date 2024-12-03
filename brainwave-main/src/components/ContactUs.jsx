import Section from "./Section.jsx";
const ContactUs = () => {

    return (
      <Section>
        <div className="flex flex-col items-center justify-center min-h-screen  p-6">
            <h2 className="text-3xl font-bold text-white  mb-6">Contact Us</h2>

            <p className="mt-6 text-white">
                Got Queries or Feedback ?  you can reach us at:{" "}
                <a
                    href="mailto:admin@revachi-ai.com"
                    className="text-blue-500 underline"
                >
                    admin@revachi-ai.com
                </a> , 
                <a
                    href="mailto:anishdeokate@revachiai.com"
                    className="text-blue-500 underline"
                >
                    anishdeokate@revachiai.com
                </a>
            </p>
            <p className="mt-4">
          <strong>About Revachi AI:</strong> Revachi Ai is located in Pune , Maharastra,411014 .
         </p>
        

        </div>
      </Section>
    );
};

export default ContactUs;
