"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import {
  BarChart3,
  FileText,
  CheckCircle,
  Clock,
  Users,
  LogOut,
  Zap,
  Plus,
  Home,
  MapPin,
  Phone,
  Building2,
  X,
  Loader2,
  AlertTriangle,
  Info,
  ArrowLeft,
  Upload,
  Search,
} from "lucide-react";

interface Residence {
  id: string;
  name: string;
  address: string;
  subdistrict: string | null;
  district: string | null;
  province: string | null;
  postalCode: string | null;
  phone: string | null;
}

/* ------------------------------------------------------------------ */
/*  Add Residence Modal                                                */
/* ------------------------------------------------------------------ */

function AddResidenceModal({
  onClose,
  onAdded,
}: {
  onClose: () => void;
  onAdded: () => void;
}) {
  const [step, setStep] = useState<"question" | "form">("question");
  const [registered, setRegistered] = useState<"yes" | "no" | null>(null);
  const [immigrationEmail, setImmigrationEmail] = useState("");
  const [immigrationPassword, setImmigrationPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ---- Full registration form state ---- */
  const [form, setForm] = useState({
    residenceType: "",
    documentType: "",
    postalCode: "",
    province: "",
    amphur: "",
    tambon: "",
    residenceNumber: "",
    moo: "",
    street: "",
    alley: "",
    ownerNationality: "foreigner" as "foreigner" | "thai",
    ownerSex: "male" as "male" | "female",
    ownerFirstName: "",
    ownerLastName: "",
    ownerPhone: "",
  });

  const [uploadedFileName, setUploadedFileName] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Map form to API shape
      const payload = {
        name: `${form.residenceNumber} ${form.street || form.alley || ""}`.trim() || "My Residence",
        address: [
          form.residenceNumber,
          form.moo ? `Moo ${form.moo}` : "",
          form.alley ? `Alley ${form.alley}` : "",
          form.street,
        ]
          .filter(Boolean)
          .join(", "),
        subdistrict: form.tambon,
        district: form.amphur,
        province: form.province,
        postalCode: form.postalCode,
        phone: form.ownerPhone,
      };

      const res = await fetch("/api/residences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to add residence");
        return;
      }

      onAdded();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg border border-gray-border text-dark text-[14px] placeholder-[#b0bec5] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20";

  const selectClass =
    "w-full px-4 py-2.5 rounded-lg border border-gray-border text-dark text-[14px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 bg-white appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%236B7B8D%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M4%206l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_12px_center] bg-no-repeat";

  const sectionTitle = "text-[15px] font-semibold text-dark mb-3";

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl border border-gray-border shadow-[0_8px_40px_rgba(0,0,0,0.12)] w-full max-w-[560px] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-border sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            {step === "form" && (
              <button
                onClick={() => setStep("question")}
                className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-bg transition-colors"
              >
                <ArrowLeft size={18} className="text-gray-text" />
              </button>
            )}
            <div>
              <h2 className="text-[18px] font-semibold text-dark">
                {step === "question" ? "Add Residence" : "Add new residence"}
              </h2>
              <p className="text-[13px] text-gray-text">
                {step === "question"
                  ? "First, a quick question about your registration"
                  : "You will be able to add the guests and get a TM30 for them on the next step"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-bg transition-colors flex-shrink-0"
          >
            <X size={18} className="text-gray-text" />
          </button>
        </div>

        {/* Step 1: Registration question */}
        {step === "question" && (
          <div className="p-6">
            <h3 className="text-[20px] font-bold text-dark mb-6 leading-snug">
              Is your residence registered with the Immigration Bureau?
            </h3>

            {/* Options */}
            <div className="space-y-3 mb-5">
              <button
                type="button"
                onClick={() => setRegistered("yes")}
                className={`w-full text-center py-5 rounded-xl border-2 transition-all ${
                  registered === "yes"
                    ? "border-primary bg-white"
                    : "border-gray-border hover:border-gray-text/30 bg-white"
                }`}
              >
                <div className="relative">
                  <div className="text-[18px] font-bold text-dark">Yes</div>
                  <div className="text-[13px] text-gray-text mt-1">
                    (I have received a password)
                  </div>
                  {registered === "yes" && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                  )}
                </div>
              </button>

              <button
                type="button"
                onClick={() => setRegistered("no")}
                className={`w-full text-center py-5 rounded-xl border-2 transition-all ${
                  registered === "no"
                    ? "border-primary bg-white"
                    : "border-gray-border hover:border-gray-text/30 bg-white"
                }`}
              >
                <div className="relative">
                  <div className="text-[18px] font-bold text-dark">No</div>
                  <div className="text-[13px] text-gray-text mt-1">
                    (don&apos;t know, or forgot my credentials)
                  </div>
                  {registered === "no" && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                  )}
                </div>
              </button>
            </div>

            {/* "Yes" — ask for immigration credentials */}
            {registered === "yes" && (
              <div className="mb-5">
                <div className="border-l-4 border-primary bg-blue-50 rounded-r-lg px-4 py-3 mb-4">
                  <p className="text-[13px] text-dark leading-relaxed">
                    Please provide your e-mail and password that you registered
                    with on the immigration website (
                    <span className="text-primary">
                      https://tm30.immigration.go.th/tm30/
                    </span>
                    ). This will allow us to submit TM30 applications on your
                    behalf.
                  </p>
                  <p className="text-[13px] mt-2 leading-relaxed">
                    <span className="text-red-500 font-semibold">
                      If you don&apos;t know what this is,
                    </span>{" "}
                    <span className="text-dark">
                      please click <strong>&quot;No&quot;</strong> above.
                    </span>
                  </p>
                </div>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Immigration Username (e-mail)"
                    value={immigrationEmail}
                    onChange={(e) => setImmigrationEmail(e.target.value)}
                    className={inputClass}
                  />
                  <input
                    type="password"
                    placeholder="Immigration Password"
                    value={immigrationPassword}
                    onChange={(e) => setImmigrationPassword(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            )}

            {/* "No" — we'll create an account */}
            {registered === "no" && (
              <div className="border-l-4 border-primary bg-blue-50 rounded-r-lg px-4 py-3 mb-5">
                <p className="text-[13px] text-dark leading-relaxed">
                  No problem! We can create a new account with the Immigration
                  Bureau on your behalf. You will be asked to fill out the
                  application on the next step.
                </p>
              </div>
            )}

            {/* Continue button */}
            <button
              type="button"
              onClick={() => setStep("form")}
              disabled={registered === null}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-primary text-white font-semibold text-[15px] hover:bg-primary-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2: Full registration form */}
        {step === "form" && (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {error && (
              <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-[13px] text-danger">
                {error}
              </div>
            )}

            {/* ===== General Residence Information ===== */}
            <div>
              <h4 className={sectionTitle}>General Residence Information</h4>
              <div className="space-y-3">
                {/* Residence Type */}
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-1.5">
                    Residence Type
                  </label>
                  <select
                    name="residenceType"
                    value={form.residenceType}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">Choose your Residence Type</option>
                    <option value="house">House</option>
                    <option value="condo">Condominium</option>
                    <option value="apartment">Apartment</option>
                    <option value="hotel">Hotel / Guesthouse</option>
                    <option value="serviced_apartment">Serviced Apartment</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Document type */}
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-1.5">
                    What document will you be uploading as proof of address?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setForm((prev) => ({
                          ...prev,
                          documentType: "house_book",
                        }))
                      }
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                        form.documentType === "house_book"
                          ? "border-primary bg-primary-light/30"
                          : "border-gray-border hover:border-gray-text/30"
                      }`}
                    >
                      <div className="w-12 h-16 rounded bg-blue-100 flex items-center justify-center">
                        <FileText size={20} className="text-primary" />
                      </div>
                      <span className="text-[12px] font-medium text-dark text-center leading-tight">
                        House Book
                        <br />
                        (Blue book)
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setForm((prev) => ({
                          ...prev,
                          documentType: "title_deed",
                        }))
                      }
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                        form.documentType === "title_deed"
                          ? "border-primary bg-primary-light/30"
                          : "border-gray-border hover:border-gray-text/30"
                      }`}
                    >
                      <div className="w-12 h-16 rounded bg-amber-100 flex items-center justify-center">
                        <FileText size={20} className="text-amber-600" />
                      </div>
                      <span className="text-[12px] font-medium text-dark text-center leading-tight">
                        Title deed
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-border" />

            {/* ===== Vital Information (shown if "no" registration) ===== */}
            {registered === "no" && (
              <>
                <div>
                  <h4 className={sectionTitle}>Vital Information</h4>
                  <div className="border-l-4 border-green-400 bg-green-50 rounded-r-lg px-4 py-3">
                    <p className="text-[13px] text-green-800 leading-relaxed">
                      All good, you can proceed. Please prepare to upload the
                      following documents:
                    </p>
                    <ul className="list-disc ml-4 mt-2 text-[13px] text-green-800 space-y-1">
                      {form.documentType === "title_deed" ? (
                        <li>Copy of the Title Deed</li>
                      ) : (
                        <li>
                          1 side of the Blue Book <strong>first page</strong>,
                          which shows the address of the residence
                        </li>
                      )}
                      <li>1 side of the ID Card or passport of the owner</li>
                    </ul>
                    <p className="text-[12px] text-amber-700 mt-2 leading-relaxed">
                      We apologize for the amount of documents required. Bangkok
                      Immigration is extra scrupulous on this matter.
                    </p>
                  </div>
                </div>
                <div className="border-t border-gray-border" />
              </>
            )}

            {/* ===== Thai Postcode ===== */}
            <div>
              <h4 className={sectionTitle}>Thai Postcode</h4>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postcode"
                  value={form.postalCode}
                  onChange={handleChange}
                  className={inputClass}
                />
                <button
                  type="button"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-[13px] font-medium hover:bg-primary-dark transition-colors flex-shrink-0"
                >
                  <Search size={14} />
                  Search
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-border" />

            {/* ===== Address ===== */}
            <div>
              <h4 className={sectionTitle}>Address</h4>
              <div className="space-y-3">
                {/* Province */}
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-1.5">
                    Province
                  </label>
                  <select
                    name="province"
                    value={form.province}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">Choose your Province</option>
                    <option value="Bangkok">Bangkok</option>
                    <option value="Chiang Mai">Chiang Mai</option>
                    <option value="Chiang Rai">Chiang Rai</option>
                    <option value="Chonburi">Chonburi</option>
                    <option value="Krabi">Krabi</option>
                    <option value="Nonthaburi">Nonthaburi</option>
                    <option value="Pattaya">Pattaya</option>
                    <option value="Phuket">Phuket</option>
                    <option value="Samut Prakan">Samut Prakan</option>
                    <option value="Surat Thani">Surat Thani</option>
                  </select>
                </div>

                {/* Amphur */}
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-1.5">
                    Amphur
                  </label>
                  <select
                    name="amphur"
                    value={form.amphur}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">
                      {form.province
                        ? "Choose your Amphur"
                        : "Please select the Province first"}
                    </option>
                  </select>
                </div>

                {/* Tambon */}
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-1.5">
                    Tambon
                  </label>
                  <select
                    name="tambon"
                    value={form.tambon}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">
                      {form.amphur
                        ? "Choose your Tambon"
                        : "Please select the Amphur first"}
                    </option>
                  </select>
                </div>

                {/* Residence number */}
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-1.5">
                    Residence number
                  </label>
                  <input
                    type="text"
                    name="residenceNumber"
                    placeholder="Residence number (example: 122/168)"
                    value={form.residenceNumber}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Moo */}
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-1.5">
                    Moo (village number)
                  </label>
                  <input
                    type="text"
                    name="moo"
                    placeholder="Moo (village number) (optional)"
                    value={form.moo}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Street */}
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-1.5">
                    Street
                  </label>
                  <input
                    type="text"
                    name="street"
                    placeholder="Street (optional, example: Sukhumvit 22)"
                    value={form.street}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Alley */}
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-1.5">
                    Alley
                  </label>
                  <input
                    type="text"
                    name="alley"
                    placeholder="Alley (optional)"
                    value={form.alley}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-border" />

            {/* ===== Upload Documents ===== */}
            <div>
              <h4 className={sectionTitle}>Please upload documents</h4>
              <p className="text-[13px] text-dark mb-3">
                {form.documentType === "title_deed" ? (
                  <>
                    Title Deed <strong>copy</strong> (which shows the address of the residence)
                  </>
                ) : (
                  <>
                    Blue book <strong>first page only</strong> (which shows the
                    address of the residence)
                  </>
                )}
              </p>
              <div className="flex gap-2">
                <div className="flex-1 px-4 py-2.5 rounded-lg border border-gray-border text-[14px] text-[#b0bec5] truncate">
                  {uploadedFileName || "Choose file"}
                </div>
                <label className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-[13px] font-medium hover:bg-primary-dark transition-colors cursor-pointer flex-shrink-0">
                  <Upload size={14} />
                  Browse
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setUploadedFileName(file.name);
                    }}
                  />
                </label>
              </div>
              <p className="text-[12px] text-red-500 mt-1.5">
                This file is required
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-border" />

            {/* ===== Residence Owner Information ===== */}
            <div>
              <h4 className={sectionTitle}>Residence owner information</h4>
              <div className="space-y-4">
                {/* Nationality */}
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-2">
                    Owner&apos;s nationality
                  </label>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setForm((prev) => ({
                          ...prev,
                          ownerNationality: "foreigner",
                        }))
                      }
                      className={`flex flex-col items-center gap-1.5 px-5 py-3 rounded-xl border-2 transition-all ${
                        form.ownerNationality === "foreigner"
                          ? "border-primary bg-primary-light/30"
                          : "border-gray-border hover:border-gray-text/30"
                      }`}
                    >
                      <span className="text-[22px]">🌍</span>
                      <span className="text-[12px] font-medium text-dark">
                        Foreigner
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setForm((prev) => ({
                          ...prev,
                          ownerNationality: "thai",
                        }))
                      }
                      className={`flex flex-col items-center gap-1.5 px-5 py-3 rounded-xl border-2 transition-all ${
                        form.ownerNationality === "thai"
                          ? "border-primary bg-primary-light/30"
                          : "border-gray-border hover:border-gray-text/30"
                      }`}
                    >
                      <span className="text-[22px]">🇹🇭</span>
                      <span className="text-[12px] font-medium text-dark">
                        Thai
                      </span>
                    </button>
                  </div>
                </div>

                {/* Sex */}
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-2">
                    Sex
                  </label>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setForm((prev) => ({ ...prev, ownerSex: "male" }))
                      }
                      className={`flex flex-col items-center gap-1.5 px-5 py-3 rounded-xl border-2 transition-all ${
                        form.ownerSex === "male"
                          ? "border-primary bg-primary-light/30"
                          : "border-gray-border hover:border-gray-text/30"
                      }`}
                    >
                      <span className="text-[22px]">👨</span>
                      <span className="text-[12px] font-medium text-dark">
                        Male
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setForm((prev) => ({ ...prev, ownerSex: "female" }))
                      }
                      className={`flex flex-col items-center gap-1.5 px-5 py-3 rounded-xl border-2 transition-all ${
                        form.ownerSex === "female"
                          ? "border-primary bg-primary-light/30"
                          : "border-gray-border hover:border-gray-text/30"
                      }`}
                    >
                      <span className="text-[22px]">👩</span>
                      <span className="text-[12px] font-medium text-dark">
                        Female
                      </span>
                    </button>
                  </div>
                </div>

                {/* Owner name */}
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-1.5">
                    Residence owner&apos;s First Name
                  </label>
                  <input
                    type="text"
                    name="ownerFirstName"
                    placeholder="Residence owner's First Name"
                    value={form.ownerFirstName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-1.5">
                    Residence owner&apos;s Last Name
                  </label>
                  <input
                    type="text"
                    name="ownerLastName"
                    placeholder="Residence owner's Last Name"
                    value={form.ownerLastName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-1.5">
                    Residence owner&apos;s Phone Number
                  </label>
                  <input
                    type="tel"
                    name="ownerPhone"
                    placeholder="Residence owner's Phone Number"
                    value={form.ownerPhone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-green-600 text-white font-semibold text-[15px] hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Registering...
                </>
              ) : (
                "Register residence"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Onboarding view (no residences yet)                                */
/* ------------------------------------------------------------------ */

function OnboardingView({ onAddResidence }: { onAddResidence: () => void }) {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="bg-white rounded-xl border border-gray-border shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-8 md:p-10 max-w-[500px] w-full text-center">
        {/* Illustration */}
        <div className="w-20 h-20 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-6">
          <Home size={36} className="text-primary" />
        </div>

        <h2 className="text-[24px] font-bold text-dark mb-2">Welcome!</h2>
        <p className="text-[15px] text-gray-text mb-2 leading-relaxed">
          Let&apos;s start by adding your residence.
        </p>
        <p className="text-[13px] text-gray-text/80 mb-8 leading-relaxed">
          You need to register at least one property before you can submit TM30
          forms for your guests.
        </p>

        <button
          onClick={onAddResidence}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-primary text-white font-medium text-[15px] hover:bg-primary-dark transition-colors"
        >
          <Plus size={18} />
          Add your first residence
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main dashboard view (has residences)                               */
/* ------------------------------------------------------------------ */

function DashboardView({
  residences,
  onAddResidence,
}: {
  residences: Residence[];
  onAddResidence: () => void;
}) {
  const stats = [
    {
      label: "Forms Submitted",
      value: "0",
      change: "Get started below",
      changeColor: "text-primary",
      icon: FileText,
    },
    {
      label: "Success Rate",
      value: "—",
      change: "No data yet",
      changeColor: "text-gray-text",
      icon: CheckCircle,
    },
    {
      label: "Avg. Processing",
      value: "—",
      change: "AI-powered",
      changeColor: "text-primary",
      icon: Clock,
    },
    {
      label: "Active Guests",
      value: "0",
      change: "Add your first guest",
      changeColor: "text-gray-text",
      icon: Users,
    },
  ];

  return (
    <>
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-gray-border p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[13px] text-gray-text">{stat.label}</span>
              <div className="w-8 h-8 rounded-lg bg-gray-bg flex items-center justify-center">
                <stat.icon size={16} className="text-gray-text" />
              </div>
            </div>
            <div className="text-[28px] font-bold text-dark leading-tight">
              {stat.value}
            </div>
            <div className={`text-[12px] ${stat.changeColor} mt-1`}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Residences + Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {/* Residences list */}
        <div className="bg-white rounded-xl border border-gray-border p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                <Home size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-dark">
                  Your Residences
                </h3>
                <p className="text-[13px] text-gray-text">
                  {residences.length} propert
                  {residences.length === 1 ? "y" : "ies"} registered
                </p>
              </div>
            </div>
            <button
              onClick={onAddResidence}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-medium text-primary hover:bg-primary-light transition-colors"
            >
              <Plus size={14} />
              Add
            </button>
          </div>
          <div className="space-y-2">
            {residences.map((r) => (
              <div
                key={r.id}
                className="flex items-start gap-3 p-3 rounded-lg border border-gray-border hover:border-primary/20 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-bg flex items-center justify-center flex-shrink-0">
                  <Building2 size={15} className="text-gray-text" />
                </div>
                <div className="min-w-0">
                  <div className="text-[13px] font-medium text-dark">
                    {r.name}
                  </div>
                  <div className="text-[12px] text-gray-text truncate">
                    {r.address}
                    {r.district ? `, ${r.district}` : ""}
                    {r.province ? `, ${r.province}` : ""}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit new TM30 */}
        <div className="bg-white rounded-xl border border-gray-border p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
              <Plus size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-[16px] font-semibold text-dark">
                Submit a TM30
              </h3>
              <p className="text-[13px] text-gray-text">
                Snap a passport photo to get started
              </p>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-white font-medium text-[14px] hover:bg-primary-dark transition-colors">
            <Zap size={16} />
            New submission
          </button>

          {/* Recent activity */}
          <div className="mt-6 pt-5 border-t border-gray-border">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 size={15} className="text-gray-text" />
              <span className="text-[13px] font-semibold text-dark">
                Recent Activity
              </span>
            </div>
            <div className="flex items-center justify-center py-4 text-center">
              <div>
                <p className="text-[13px] text-gray-text">
                  No submissions yet
                </p>
                <p className="text-[11px] text-[#b0bec5] mt-0.5">
                  Your TM30 submissions will appear here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Dashboard Page                                                */
/* ------------------------------------------------------------------ */

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [residences, setResidences] = useState<Residence[]>([]);
  const [loadingResidences, setLoadingResidences] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);

  const fetchResidences = useCallback(async () => {
    try {
      const res = await fetch("/api/residences");
      if (res.ok) {
        const data = await res.json();
        setResidences(data);
      }
    } catch (err) {
      console.error("Failed to fetch residences:", err);
    } finally {
      setLoadingResidences(false);
    }
  }, []);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  useEffect(() => {
    if (status === "authenticated") {
      fetchResidences();
    }
  }, [status, fetchResidences]);

  if (status === "loading" || (status === "authenticated" && loadingResidences)) {
    return (
      <div className="min-h-screen bg-gray-bg flex items-center justify-center">
        <div className="flex items-center gap-3">
          <Loader2 size={20} className="animate-spin text-primary" />
          <span className="text-[14px] text-gray-text">Loading...</span>
        </div>
      </div>
    );
  }

  if (!session) return null;

  const hasResidences = residences.length > 0;

  return (
    <div className="min-h-screen bg-gray-bg">
      {/* Top nav */}
      <nav className="bg-white border-b border-gray-border">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-1.5">
            <span className="text-[20px] font-bold text-dark tracking-tight">
              TM30<span className="text-primary">.ai</span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-[12px] font-semibold text-primary">
                {session.user?.name?.charAt(0) ||
                  session.user?.email?.charAt(0)?.toUpperCase() ||
                  "U"}
              </div>
              <span className="text-[14px] text-dark font-medium hidden sm:block max-w-[160px] truncate">
                {session.user?.name || session.user?.email}
              </span>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center gap-1.5 text-[14px] text-gray-text hover:text-dark transition-colors px-3 py-2 rounded-lg hover:bg-gray-bg"
            >
              <LogOut size={15} />
              <span className="hidden sm:inline">Sign out</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Info Banner */}
      <div className="bg-purple-50 border-b border-purple-200">
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-start gap-3">
          <Info size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
          <p className="text-[13px] text-purple-700 leading-relaxed">
            <span className="font-semibold">System Update:</span> The
            immigration website has been updated. We are currently working on
            implementing their updates on our side. New residence registrations
            are currently on hold. TM30 forms for existing residences are
            currently being processed.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-[28px] md:text-[32px] font-bold text-dark mb-1">
            Welcome{session.user?.name ? `, ${session.user.name}` : ""}!
          </h1>
          <p className="text-[15px] text-gray-text">
            {hasResidences
              ? "Manage your TM30 submissions from one place."
              : "Get started by adding your first residence."}
          </p>
        </div>

        {/* Show onboarding or dashboard */}
        {hasResidences ? (
          <DashboardView
            residences={residences}
            onAddResidence={() => setShowAddModal(true)}
          />
        ) : (
          <OnboardingView onAddResidence={() => setShowAddModal(true)} />
        )}
      </div>

      {/* Add Residence Modal */}
      {showAddModal && (
        <AddResidenceModal
          onClose={() => setShowAddModal(false)}
          onAdded={() => {
            setShowAddModal(false);
            fetchResidences();
          }}
        />
      )}
    </div>
  );
}
