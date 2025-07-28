import Trainer from './Trainer.js';

const trainersData = [
  new Trainer("T001", "John Smith", "john.smith@cognizant.com", "9876543210", "React", ["JavaScript", "React", "Redux", "Node.js"]),
  new Trainer("T002", "Sarah Johnson", "sarah.johnson@cognizant.com", "9876543211", "Angular", ["TypeScript", "Angular", "RxJS", "HTML5"]),
  new Trainer("T003", "Mike Wilson", "mike.wilson@cognizant.com", "9876543212", "Java", ["Java", "Spring Boot", "Microservices", "REST API"]),
  new Trainer("T004", "Emma Davis", "emma.davis@cognizant.com", "9876543213", "Python", ["Python", "Django", "Flask", "Machine Learning"]),
  new Trainer("T005", "David Brown", "david.brown@cognizant.com", "9876543214", "DevOps", ["Docker", "Kubernetes", "Jenkins", "AWS"])
];

export default trainersData;