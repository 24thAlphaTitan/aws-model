import React from "react";
import Section from "./Section";
import {Link} from "react-router-dom";
import { socials } from "../constants";

const Footer = () => {
    const handleTermsClick = () => {
        alert(
            `Terms And Conditions:\n\n1. Introduction\nWelcome to Revachi AI’s virtual try-on service. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please refrain from using our services.\n\n2. Services Provided\nRevachi AI offers a virtual clothes try-on service, allowing users to visualize how clothing items may look on them. The services are intended for personal use and are provided as is, without any guarantee of accurate fit or appearance.\n\n3. Payments and Refunds\nAll payments made for our services are final.\nOnce a payment is successfully processed, it is non-refundable under any circumstances.\nIt is the user’s responsibility to review the details of the service and ensure it meets their requirements before making a payment.\n\n4. User Responsibilities\nUsers are responsible for providing accurate images and details for the virtual try-on service.\n\n5. Privacy Policy\nWe value your privacy. Any personal information or images uploaded to our platform are protected under our privacy policy and will not be shared with third parties without your explicit consent, except as required by law.\n\n6. Intellectual Property\nAll content on the website, including but not limited to text, graphics, and software, is the property of Revachi AI and is protected by applicable intellectual property laws.\n\n7. Limitation of Liability\nRevachi AI will not be held liable for any indirect, incidental, or consequential damages resulting from the use of our platform.\n\n8. Modifications to the Terms\nWe reserve the right to modify these terms and conditions at any time. Any changes will be posted on this page, and your continued use of the service constitutes acceptance of such changes.\n\n9. Governing Law\nThese terms and conditions shall be governed by and construed in accordance with the laws of [Insert Country/State].`
        );
    };

    return (
        <Section crosses className="!px-0 !py-10">
            <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="caption text-n-4 lg:block">
                    © {new Date().getFullYear()}. All rights reserved.
                </p>

                <ul className="flex gap-5 flex-wrap">
                    {socials.map((item) => (
                        <a
                            key={item.id}
                            href={item.url}
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                        >
                            <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                        </a>
                    ))}
                </ul>

                <Link
          to="/terms-and-conditions"
          className="text-white text-sm hover:underline"
        >
          Terms and Conditions
              </Link>
            </div>
        </Section>
    );
};

export default Footer;

