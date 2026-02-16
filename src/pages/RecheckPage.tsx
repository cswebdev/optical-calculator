import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/components/ui/card';
import { Label } from '../components/components/ui/label';
import { Textarea } from '../components/components/ui/textarea';
import { Button } from '../components/components/ui/button';
import './RecheckPage.css';

const RecheckPage: React.FC = () => {
  const [formData, setFormData] = useState({
    // Patient Information
    patientName: '',
    dateOfBirth: '',
    MRN: '',

    // Prescribing Doctor Information
    doctorName: '',
    rxDate: '',
    
    // Order Information
    purchaseDate: '',
    purchaseLocation: '',
    
    // Complaint Information
    complaintDate: '',
    chiefComplaint: '',
    
    // Current Prescription - Right Eye (OD)
    odSphere: '',
    odCylinder: '',
    odAxis: '',
    odAdd: '',
    odPrism: '',
    
    // Current Prescription - Left Eye (OS)
    osSphere: '',
    osCylinder: '',
    osAxis: '',
    osAdd: '',
    osPrism: '',

    // Previous Prescription (if available)
    previousOdSphere: '',
    previousOdCylinder: '',
    previousOdAxis: '',
    previousOdAdd: '',
    previousOdPrism: '',
    previousOsSphere: '',
    previousOsCylinder: '',
    previousOsAxis: '',
    previousOsAdd: '',
    previousOsPrism: '',

    
    // Measurements
    odPD: '',
    osPD: '',
    segHeight: '',
    previousOdPD: '',
    previousOsPD: '',
    previousSegHeight: '',
    
    // Lens Information
    lensType: '',
    lensMaterial: '',
    
    // Additional Notes
    additionalNotes: '',
    
    // Staff Information
    technicianName: '',
    reviewDate: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Add form submission logic (PDF generation, email, etc.)
    alert('Recheck form submitted! Check console for data.');
  };

  const handlePrint = () => {
    // Store original readonly states
    const inputs = document.querySelectorAll('input, textarea');
    const originalStates = new Map();
    
    // Make all inputs readonly to help with printing
    inputs.forEach((input) => {
      originalStates.set(input, (input as HTMLInputElement).readOnly);
      (input as HTMLInputElement).readOnly = true;
    });
    
    // Trigger print
    window.print();
    
    // Restore original states after a delay
    setTimeout(() => {
      inputs.forEach((input) => {
        (input as HTMLInputElement).readOnly = originalStates.get(input);
      });
    }, 100);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 flex justify-between items-center print:mb-4">
          <h1 className="text-3xl font-bold text-slate-800">Optical Recheck Form</h1>
          <div className="space-x-2 print:hidden">
            <Button onClick={handlePrint} variant="outline">Print</Button>
            {/* <Button onClick={handleSubmit}>Submit</Button> */}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <Card>
            <CardContent className="space-y-8 pt-6">
              {/* Patient Information */}
              <div>
                <h2 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">Patient Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="patientName">Patient Name</Label>
                <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="patientName"
                  name="patientName"
                  type='text'
                  defaultValue={formData.patientName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  defaultValue={formData.dateOfBirth}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="MRN">MRN</Label>
                <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="MRN"
                  name="MRN"
                  type="text"
                  defaultValue={formData.MRN}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="doctorName">Prescribing Doctor</Label>
                <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="doctorName"
                  name="doctorName"
                  type="text"
                  defaultValue={formData.doctorName}
                  onChange={handleInputChange}
                />
              </div>
               <div>
                <Label htmlFor="rxDate">RX Date</Label>
                <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="rxDate"
                  name="rxDate"
                  type="date"
                  defaultValue={formData.rxDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* Order Information */}
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">Order Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="purchaseDate">Purchase Date</Label>
                <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="purchaseDate"
                  name="purchaseDate"
                  type="date"
                  defaultValue={formData.purchaseDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="purchaseLocation">Purchase Location</Label>
                <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="purchaseLocation"
                  name="purchaseLocation"
                  type='text'
                  defaultValue={formData.purchaseLocation}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="complaintDate">Date of Complaint</Label>
                <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="complaintDate"
                  name="complaintDate"
                  type="date"
                  defaultValue={formData.complaintDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Chief Complaint */}
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">Chief Complaint</h2>
            <div>
              <Label htmlFor="chiefComplaint">Brief Description *</Label>
              <Textarea
                id="chiefComplaint"
                name="chiefComplaint"
                defaultValue={formData.chiefComplaint}
                onChange={handleInputChange}
                placeholder="Describe the main issue with the glasses..."
                rows={3}
                required
              />
            </div>
          </div>

          {/* Prescription Comparison - Side by Side */}
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">Prescription Comparison</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Current Prescription Column */}
              <div className="space-y-2">
                <h3 className="font-bold text-slate-700 text-center mb-3">Current Prescription</h3>
                
                {/* Current OD - Single Line */}
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-700 text-sm w-8">OD:</span>
                  <div className="flex-1 grid grid-cols-5 gap-2">
                    <div>
                      <Label htmlFor="odSphere" className="text-xs">Sph</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="odSphere"
                        name="odSphere"
                        type="text"
                        defaultValue={formData.odSphere}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="odCylinder" className="text-xs">Cyl</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="odCylinder"
                        name="odCylinder"
                        type="text"   
                        defaultValue={formData.odCylinder}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="odAxis" className="text-xs">Axis</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="odAxis"
                        name="odAxis"
                        type="text"
                        defaultValue={formData.odAxis}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="odAdd" className="text-xs">Add</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="odAdd"
                        name="odAdd"
                        type="text"
                        defaultValue={formData.odAdd}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="odPrism" className="text-xs">Prism</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="odPrism"
                        name="odPrism"
                        type="text"
                        defaultValue={formData.odPrism}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Current OS - Single Line */}
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-700 text-sm w-8">OS:</span>
                  <div className="flex-1 grid grid-cols-5 gap-2">
                    <div>
                      <Label htmlFor="osSphere" className="text-xs">Sph</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="osSphere"
                        name="osSphere"
                        type="text"
                        defaultValue={formData.osSphere}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="osCylinder" className="text-xs">Cyl</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="osCylinder"
                        name="osCylinder"
                        type="text"
                        defaultValue={formData.osCylinder}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="osAxis" className="text-xs">Axis</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="osAxis"
                        name="osAxis"
                        type="text"
                        defaultValue={formData.osAxis}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="osAdd" className="text-xs">Add</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="osAdd"
                        name="osAdd"
                        type="text"
                        defaultValue={formData.osAdd}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="osPrism" className="text-xs">Prism</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="osPrism"
                        name="osPrism"
                        type="text"
                        defaultValue={formData.osPrism}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Current Measurements */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="font-semibold text-slate-700 text-sm w-8"></span>
                  <div className="flex-1 grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="odPD" className="text-xs">OD PD</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="odPD"
                        name="odPD"
                        type="text"
                        defaultValue={formData.odPD}
                        onChange={handleInputChange}
                      />
                    </div>
                     <div>
                      <Label htmlFor="osPD" className="text-xs">OS PD</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="osPD"
                        name="osPD"
                        type="text"
                        defaultValue={formData.osPD}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="segHeight" className="text-xs">Seg Ht</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="segHeight"
                        name="segHeight"
                        type="text"
                        defaultValue={formData.segHeight}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Previous Prescription Column */}
              <div className="space-y-2  pl-6">
                <h3 className="font-bold text-slate-700 text-center mb-3">Previous Prescription</h3>
                
                {/* Previous OD - Single Line */}
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-700 text-sm w-8">OD:</span>
                  <div className="flex-1 grid grid-cols-5 gap-2">
                    <div>
                      <Label htmlFor="previousOdSphere" className="text-xs">Sph</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="previousOdSphere"
                        name="previousOdSphere"
                        type="text"
                        defaultValue={formData.previousOdSphere}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="previousOdCylinder" className="text-xs">Cyl</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="previousOdCylinder"
                        name="previousOdCylinder"
                        defaultValue={formData.previousOdCylinder}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="previousOdAxis" className="text-xs">Axis</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="previousOdAxis"
                        name="previousOdAxis"
                        defaultValue={formData.previousOdAxis}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="previousOdAdd" className="text-xs">Add</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="previousOdAdd"
                        name="previousOdAdd"
                        defaultValue={formData.previousOdAdd}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="previousOdPrism" className="text-xs">Prism</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="previousOdPrism"
                        name="previousOdPrism"
                        defaultValue={formData.previousOdPrism}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Previous OS - Single Line */}
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-700 text-sm w-8">OS:</span>
                  <div className="flex-1 grid grid-cols-5 gap-2">
                    <div>
                      <Label htmlFor="previousOsSphere" className="text-xs">Sph</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="previousOsSphere"
                        name="previousOsSphere"
                        defaultValue={formData.previousOsSphere}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="previousOsCylinder" className="text-xs">Cyl</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="previousOsCylinder"
                        name="previousOsCylinder"
                        defaultValue={formData.previousOsCylinder}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="previousOsAxis" className="text-xs">Axis</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="previousOsAxis"
                        name="previousOsAxis"
                        defaultValue={formData.previousOsAxis}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="previousOsAdd" className="text-xs">Add</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="previousOsAdd"
                        name="previousOsAdd"
                        defaultValue={formData.previousOsAdd}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="previousOsPrism" className="text-xs">Prism</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="previousOsPrism"
                        name="previousOsPrism"
                        defaultValue={formData.previousOsPrism}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Previous Measurements */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="font-semibold text-slate-700 text-sm w-8"></span>
                  <div className="flex-1 grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="previousOdPD" className="text-xs">OD PD</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="previousOdPD"
                        name="previousOdPD"
                        defaultValue={formData.previousOdPD}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="previousOsPD" className="text-xs">OS PD</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="previousOsPD"
                        name="previousOsPD"
                        defaultValue={formData.previousOsPD}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="previousSegHeight" className="text-xs">Seg Ht</Label>
                      <input className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="previousSegHeight"
                        name="previousSegHeight"
                        defaultValue={formData.previousSegHeight}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lens Information */}
          <div >
            <h2 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">Lens Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="lensType">Lens Type</Label>
                <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="lensType"
                  name="lensType"
                  defaultValue={formData.lensType}
                  onChange={handleInputChange}
                  placeholder="e.g., Progressive, Bifocal, Single Vision"
                />
              </div>
              <div>
                <Label htmlFor="lensMaterial">Lens Material</Label>
                <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="lensMaterial"
                  name="lensMaterial"
                  defaultValue={formData.lensMaterial}
                  onChange={handleInputChange}
                  placeholder="e.g., Polycarbonate, High Index"
                />
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">Additional Notes & Recommendations</h2>
            <div>
              <Textarea
                id="additionalNotes"
                name="additionalNotes"
                defaultValue={formData.additionalNotes}
                onChange={handleInputChange}
                placeholder="Include any additional observations, recommendations for the doctor, or next steps..."
                rows={4}
              />
            </div>
          </div>

          {/* Staff Information */}
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">Staff Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="technicianName">Technician Name</Label>
                <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="technicianName"
                  name="technicianName"
                  defaultValue={formData.technicianName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="reviewDate">Review Date</Label>
                <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="reviewDate"
                  name="reviewDate"
                  type="date"
                  defaultValue={formData.reviewDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submit Buttons */}
      <div className="flex justify-end space-x-4 mt-6 print:hidden">
            <Button type="button" variant="outline" onClick={handlePrint}>
              Print Form
            </Button>
            {/* <Button type="submit">
              Submit Recheck Form
            </Button> */}
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default RecheckPage;
