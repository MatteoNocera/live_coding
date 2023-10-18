<!-- 
Join 1:
Selezionare tutti i corsi del Corso di Laurea in Informatica (22)
-->

SELECT `courses`.`id`, `courses`.`name`, `courses`.`period`, `courses`.`year`, `courses`.`cfu`, `courses`.`website`, `degrees`.`name` AS `degree_name`
FROM `courses`
JOIN `degrees` ON `courses`.`degree_id` = `degrees`.`id`
WHERE `degrees`.`name` = 'Corso di Laurea in Informatica';

<!-- 
Join 2:
Selezionare le informazioni sul corso con id = 144, con tutti i relativi appelli d’esame
-->

SELECT `courses`.`id` AS `course_id`, `courses`.`name`, `courses`.`description`, `courses`.`period`, `courses`.`cfu`, `courses`.`year`, `courses`.`website`, `exams`.`id` AS `exam_id`, `exams`.`date`, `exams`.`hour`, `exams`.`location`, `exams`.`address`
FROM `courses`
JOIN `exams` ON `courses`.`id` = `exams`.`course_id`
WHERE `courses`.`id` = 144;

<!-- 
Join 3:
Selezionare a quale dipartimento appartiene il Corso di Laurea in Diritto
dell'Economia (Dipartimento di Scienze politiche, giuridiche e studi internazionali)
-->

SELECT `courses`.`id`, `courses`.`name`, `courses`.`period`, `courses`.`year`, `courses`.`cfu`, `courses`.`website`, `degrees`.`name` AS `degree_name`
FROM `courses`
JOIN `degrees` ON `courses`.`degree_id` = `degrees`.`id`
WHERE `degrees`.`name` = 'Corso di Laurea in Informatica';

<!-- 
Join 4:
Selezionare tutti gli appelli d'esame del Corso di Laurea Magistrale in Fisica del
primo anno
-->

SELECT `courses`.`name`, `courses`.`period`, `courses`.`cfu`, `exams`.`date`, `exams`.`location`, `exams`.`address` 
FROM `degrees` 
JOIN `courses` ON `courses`.`degree_id` = `degrees`.`id` 
JOIN `exams` ON `exams`.`course_id` = `courses`.`id` 
WHERE `courses`.`year` = 1 AND `degrees`.`name` = 'Corso di Laurea Magistrale in Fisica';

<!-- 
Join 5:
Selezionare tutti i docenti che insegnano nel Corso di Laurea in Lettere (21)
-->

SELECT DISTINCT `teachers`.*
FROM `teachers`     
JOIN `course_teacher` ON `teachers`.`id` = `course_teacher`.`teacher_id`
JOIN `courses` ON `courses`.`id` = `course_teacher`.`course_id`
JOIN `degrees` ON `courses`.`degree_id` = `degrees`.`id`
WHERE `degrees`.`name` = 'Corso di Laurea in Lettere'
ORDER BY `teachers`.`surname` ASC;

<!-- 
Join 6:
Selezionare il libretto universitario di Mirco Messina (matricola n. 620320)
-->

SELECT `students`.`name`, `students`.`surname`, `students`.`registration_number`, `courses`.`id`, `courses`.`name`, `exams`.`date`, `exam_student`.`vote`
FROM `exam_student`
JOIN `exams` ON `exam_student`.`exam_id` =  `exams`.`id`
JOIN `students` ON `exam_student`.`student_id` = `students`.`id`
JOIN `courses` ON `exams`.`course_id` = `courses`.`id`
WHERE `students`.`name` = 'Mirco' 
AND `students`.`surname` = 'Messina'
AND `exam_student`.`vote` >= 18;