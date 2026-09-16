import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- needed for ngModel
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gap-check',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './gap-check.html',
  styleUrls: ['./gap-check.css'],
})
export class GapCheck {
  currentStep = 0; // track stepper
  formSubmitted = false;

  questions = [
    {
      title: 'Context of the Organization',
      questions: [
        {
          id: 'c4_01',
          type: 'radio',
          label:
            'Has the organisation established and implemented an Information Security Management System (ISMS)?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c4_02',
          type: 'radio',
          label:
            'Has the organisation identified internal and external factors that could affect its information security?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c4_03',
          type: 'radio',
          label:
            'Has the organisation identified relevant interested parties (e.g., customers, regulators, suppliers) and their information security requirements?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c4_04',
          type: 'radio',
          label:
            'Has the organisation defined the scope of its ISMS (e.g., business units, services, locations, or systems included)?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c4_05',
          type: 'radio',
          label: 'Is the scope of the ISMS documented and available?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
      ],
    },
    {
      title: 'Leadership',
      questions: [
        {
          id: 'c5_01',
          type: 'radio',
          label: "Does top management take accountability for and support the organisation's ISMS?",
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c5_02',
          type: 'radio',
          label:
            'Does the organisation have a documented information security policy and is formally approved by top management?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c5_03',
          type: 'radio',
          label:
            'Are sufficient resources (people, time, tools, budget) available to operate and maintain the ISMS?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c5_04',
          type: 'radio',
          label:
            'Is the information security policy communicated within the organisation and available to relevant stakeholders?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c5_05',
          type: 'radio',
          label: 'Are ISMS roles and responsibilities clearly defined and assigned?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
      ],
    },
    {
      title: 'Planning',
      questions: [
        {
          id: 'c6_01',
          type: 'radio',
          label:
            'Is there a defined information security risk assessment process to support the ISMS implementation?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c6_02',
          type: 'radio',
          label:
            'Has the organisation performed an information security risk assessment to identify and evaluate risks within the ISMS scope?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c6_03',
          type: 'radio',
          label:
            'Are risk owners assigned and responsible for approving risk treatment actions and formally accepting any remaining (residual) information security risks?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c6_04',
          type: 'radio',
          label:
            'Does the organisation define and plan actions to address identified information security risks (e.g., remediation, controls, risk acceptance, or other measures)?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c6_05',
          type: 'radio',
          label:
            'Has the organisation defined security controls for risk treatment and documented them in a Statement of Applicability (SoA)?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c6_06',
          type: 'radio',
          label: 'Has the organisation defined and documented information security objectives?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c6_07',
          type: 'radio',
          label: 'Are these information security objectives monitored and reviewed?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c6_08',
          type: 'radio',
          label: 'Are changes to the ISMS planned and managed in a controlled manner?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
      ],
    },
    {
      title: 'Support',
      questions: [
        {
          id: 'c7_01',
          type: 'radio',
          label:
            'Are individuals performing ISMS roles competent based on appropriate training, skills, or experience?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c7_02',
          type: 'radio',
          label:
            'Are employees aware of the information security policy and their responsibilities for protecting information?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c7_03',
          type: 'radio',
          label:
            'Has the organisation established and maintained the documented information required for the ISMS?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c7_04',
          type: 'radio',
          label:
            'Is there a defined process for communicating information security matters internally and externally when necessary?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c7_05',
          type: 'radio',
          label:
            'Is ISMS documented information properly controlled and protected (e.g., version control, restricted access)?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
      ],
    },
    {
      title: 'Operation',
      questions: [
        {
          id: 'c8_01',
          type: 'radio',
          label:
            'Has the organisation established processes to support the implementation of the ISMS?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c8_02',
          type: 'radio',
          label:
            'Is the information security risk assessment reviewed and updated periodically or when significant changes occur?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c8_03',
          type: 'radio',
          label:
            'Are risk treatment actions implemented to address identified information security risks?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
      ],
    },
    {
      title: 'Performance Evaluation',
      questions: [
        {
          id: 'c9_01',
          type: 'radio',
          label:
            'Has the organisation defined how the performance and effectiveness of the ISMS will be monitored and measured?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c9_02',
          type: 'radio',
          label:
            'Does the organisation conduct internal audits at planned intervals against ISO 27001:2022 requirements?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c9_03',
          type: 'radio',
          label: 'Does top management conduct periodic management reviews of the ISMS?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
      ],
    },
    {
      title: 'Improvement',
      questions: [
        {
          id: 'c10_01',
          type: 'radio',
          label:
            'Does the organisation identify and implement improvements to the ISMS based on monitoring results, audits, incidents, or management review outcomes?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
        {
          id: 'c10_02',
          type: 'radio',
          label:
            'Does the organisation have a process to manage and document nonconformities and take corrective actions to prevent recurrence?',
          value: '',
          options: ['Yes', 'No', 'Partial'],
        },
      ],
    },
    {
      title: 'Summary',
      questions: [],
    },
  ];

  nextStep() {
    if (this.currentStep < this.questions.length - 1) this.currentStep++;
  }

  prevStep() {
    if (this.currentStep > 0) this.currentStep--;
  }

  submitForm() {
    console.log(this.questions);
    // send this.questions to backend API

    this.formSubmitted = true;
  }
}
