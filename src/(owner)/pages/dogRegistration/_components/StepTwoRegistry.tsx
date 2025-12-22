
import type { ChangeEvent } from "react"
import { FiUpload } from "react-icons/fi"
import { AiOutlineWarning } from "react-icons/ai"


type StepTwoProps = {
  formData: any
  updateFormData: (d: any) => void
  nextStep: () => void
  prevStep: () => void
}

export default function StepTwoRegistry({ formData, updateFormData, nextStep, prevStep }: StepTwoProps) {

  const vaccinations = ["Rabies", "DHPP", "Bordetella", "Leptospirosis", "Lyme", "Influenza"]
  const healthClearancesList = [
    "Hip Dysplasia Clear",
    "Elbow Clear",
    "Eye Clearance (CERF)",
    "Heart Clearance",
    "PRA Clear",
    "DM Clear",
  ]

  const toggleVaccination = (vax: string) => {
    const current: string[] = formData.vaccinations || []
    if (current.includes(vax)) {
      updateFormData({ vaccinations: current.filter((v: string) => v !== vax) })
    } else {
      updateFormData({ vaccinations: [...current, vax] })
    }
  }

  const toggleHealthClearance = (clearance: string) => {
    const current: string[] = formData.healthClearances || []
    if (current.includes(clearance)) {
      updateFormData({ healthClearances: current.filter((c: string) => c !== clearance) })
    } else {
      updateFormData({ healthClearances: [...current, clearance] })
    }
  }

  const handleDocumentUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files: File[] = e.target.files ? Array.from(e.target.files) : []
    updateFormData({ uploadedDocuments: [...(formData.uploadedDocuments || []), ...files] })
  }

  const handleContinue = () => {
    nextStep()
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">


        <div className="space-y-6">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Microchip ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.microchipId}
              onChange={(e) => updateFormData({ microchipId: e.target.value })}
              placeholder="15 digit microchip number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          {/* Primary and Secondary Breed DNA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Breed DNA <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.primaryBreedDNA}
                  onChange={(e) => updateFormData({ primaryBreedDNA: e.target.value })}
                  placeholder="write dna percentage"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <div className="flex items-center gap-1 px-3 border border-gray-300 rounded-lg">
                  <input
                    type="number"
                    value={formData.primaryBreedPercent}
                    onChange={(e) => updateFormData({ primaryBreedPercent: e.target.value })}
                    placeholder="0"
                    className="w-12 text-center border-none focus:outline-none"
                    min="0"
                    max="100"
                  />
                  <span className="text-gray-600">%</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Breed DNA (optional)</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.secondaryBreedDNA}
                  onChange={(e) => updateFormData({ secondaryBreedDNA: e.target.value })}
                  placeholder="write dna percentage"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <div className="flex items-center gap-1 px-3 border border-gray-300 rounded-lg">
                  <input
                    type="number"
                    value={formData.secondaryBreedPercent}
                    onChange={(e) => updateFormData({ secondaryBreedPercent: e.target.value })}
                    placeholder="0"
                    className="w-12 text-center border-none focus:outline-none"
                    min="0"
                    max="100"
                  />
                  <span className="text-gray-600">%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="flex items-start gap-2 text-sm text-yellow-700 bg-yellow-50 p-3 rounded-lg">
            <span className="font-medium">Note:</span>
            <span>Special match with authorized DNA report to prevent repetition</span>
          </div>

          {/* Health Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Health Status</label>
            <select
              value={formData.healthStatus}
              onChange={(e) => updateFormData({ healthStatus: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="">Select status</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
              <option value="Poor">Poor</option>
            </select>
          </div>

          {/* Vaccinations */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Vaccinations</label>
            <div className="flex flex-wrap gap-2">
              {vaccinations.map((vax) => (
                <button
                  key={vax}
                  type="button"
                  onClick={() => toggleVaccination(vax)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    (formData.vaccinations || []).includes(vax)
                      ? "bg-[#D4AF37] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {vax}
                </button>
              ))}
            </div>
          </div>

          {/* Health Clearances */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Health Clearances</label>
            <div className="space-y-2">
              {healthClearancesList.map((clearance) => (
                <label key={clearance} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={(formData.healthClearances || []).includes(clearance)}
                    onChange={() => toggleHealthClearance(clearance)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{clearance}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Health Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Health Notes</label>
            <textarea
              value={formData.healthNotes}
              onChange={(e) => updateFormData({ healthNotes: e.target.value })}
              placeholder="Any additional health information..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Upload DNA Reports */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload DNA Reports & Other Documents</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
              <label className="flex flex-col items-center justify-center cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center mb-3">
                  <FiUpload className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 mb-1">Drag and drop photos here, or click to browse</p>
                <p className="text-xs text-gray-500">Supports: JPG PNG (Max: 999 per file)</p>
                <input
                  type="file"
                  multiple
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={handleDocumentUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                  onClick={() => (document.querySelector('input[type="file"]') as HTMLInputElement | null)?.click()}
                >
                  Choose Files
                </button>
              </label>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AiOutlineWarning className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-700">
                <span className="font-semibold">Important!</span>
                <p className="mt-1">
                  By submitting this registration, you confirm that all information provided is accurate and you are the
                  legal owner of this dog. False information may result in registration rejection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={prevStep}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleContinue}
            className="px-6 py-2 bg-[#D4AF37] text-white rounded-lg font-medium hover:bg-[#C19B2E]"
          >
            Continue
          </button>
        </div>
      </div>

    </div>
  )
}
