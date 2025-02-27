

function MailContact({mailContact}) {
    let mail = "";
    if (!mailContact || mailContact === "")
    {
      mail = "info@aaronn.com"
    }
    else {
      mail = mailContact;
    }
    return  <section className="bg-black py-8r" >
        <h3 className="py-2r px-4r text-center text-2r text-c-orange-100 font-semibold">
          Get in touch with
        </h3>
        <a href="mailto:info@aaronn.com"
        className="text-center text-6r hover:text-c-orange-100 font-semibold block underline">
          {mail}
        </a>
    </section>
}

export default MailContact;