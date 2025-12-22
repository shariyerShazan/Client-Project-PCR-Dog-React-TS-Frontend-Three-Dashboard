
import { useState } from "react"
import StepOneRegistry from "./_components/StepOneRegistry"
import StepTwoRegistry from "./_components/StepTwoRegistry"
import StepThreeRegistry from "./_components/StepThreeRegistry"
import RegistryStepIndicator from "./_components/RegistryStepIndicator"
import RegistryPreview from "./_components/RegistryPreview"

export default function OwnerDogRegistration() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<any>({
    dogName: "",
    breed: "",
    sex: "",
    dateOfBirth: "",
    color: "",
    weight: "",
    location: "",
    uploadedImages: [],
    microchipId: "",
    primaryBreedDNA: "",
    primaryBreedPercent: "",
    secondaryBreedDNA: "",
    secondaryBreedPercent: "",
    healthStatus: "",
    vaccinations: [],
    healthClearances: [],
    healthNotes: "",
    uploadedDocuments: [],
  })

  const updateFormData = (data: any) =>
    setFormData((prev: any) => ({ ...prev, ...data }))

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Real dogs, real verification, real trust
          </h1>
          <p className="text-gray-600">
            Complete the form below to receive your verified PCR ID
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <RegistryStepIndicator currentStep={currentStep} />

            {currentStep === 1 && (
              <StepOneRegistry
                formData={formData}
                updateFormData={updateFormData}
                nextStep={() => setCurrentStep(2)}
              />
            )}

            {currentStep === 2 && (
              <StepTwoRegistry
                formData={formData}
                updateFormData={updateFormData}
                prevStep={() => setCurrentStep(1)}
                nextStep={() => setCurrentStep(3)}
              />
            )}

            {currentStep === 3 && (
              <StepThreeRegistry
                formData={formData}
                prevStep={() => setCurrentStep(2)}
              />
            )}
          </div>

          {/* RIGHT */}
          <RegistryPreview formData={formData} />
        </div>
      </div>
    </div>
  )
}
