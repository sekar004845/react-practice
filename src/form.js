import { useState } from "react";

function FormModal({ show, onClose, service }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // For phone input, allow only digits
    if (name === "phone") {
      const onlyNums = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: onlyNums }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Service:", service?.title);
    console.log("Form Data:", formData);

    alert("Form submitted successfully!");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

    onClose();
  };

  return (
    <>
      <div className="custom-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Enquiry – {service?.title}</h5>
              <button
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
                type="button"
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-backdrop" onClick={onClose}></div>
    </>
  );
}

export default FormModal;
