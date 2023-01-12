import { Route, Routes } from 'react-router-dom';
import CourseVideo from './Pages/Student/CourseVideo';
import Homework from './Pages/Student/Homework';
import NewsDetail from './Pages/Student/NewsDetail';
import Notes from './Pages/Student/Notes';
import Routine from './Pages/Student/Routine';
import Student from './Pages/Student/Student';
import Teacher from './Pages/Teacher/Teacher';
import Transportation from './Pages/Student/Transportation';
import OnlineClass from './Pages/Student/OnlineClass';
import { Attendance } from './Pages/Student/Attendance';
import GradeSheet from './Pages/Student/GradeSheet';
import Information from './Pages/Student/Information';
import Profile from './Pages/Student/Profile';
import HomePage from './Pages/HomePage';
import StudentLogin from './Pages/Student/StudentLogin';
import TeacherLogin from './Pages/Teacher/TeacherLogin';
import FeePaid from './Pages/Student/FeePaid';
import CreditFee from './Pages/Student/CreditFee';
import Books from './Pages/Student/Books';
import PreviousEducation from './Pages/Student/PreviousEducation';
import TeacherOnlineClass from './Pages/Teacher/TeacherOnlineClass';
import TeacherHomework from './Pages/Teacher/TeacherHomework';
import HomeworkCheck from './Pages/Teacher/HomeworkCheck';
import StudentAttendance from './Pages/Teacher/StudentAttendance';
import UploadVideo from './Pages/Teacher/UploadVideo';
import HomeworkSubmission from './Pages/Student/HomeworkSubmission';
import MarkEntry from './Pages/Teacher/MarkEntry';
import Calendar from './Pages/Student/Calendar';
import TeacherCalendar from './Pages/Teacher/Calendar';
import AddNotes from './Pages/Student/AddNotes';
import NotesView from './Pages/Student/NotesView';
import Notice from './Pages/Teacher/Notice';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/studentlogin' element={<StudentLogin/>}></Route>
        <Route path='/teacherlogin' element={<TeacherLogin/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/onlineclass' element={<OnlineClass/>}></Route>
        <Route path='/notes' element={<Notes/>}></Route>
        <Route path='/notes/add' element={<AddNotes/>}></Route>
        <Route path='/notes/:id' element={<NotesView/>}></Route>
        <Route path='/books' element={<Books/>}></Route>
        <Route path='/routine' element={<Routine/>}></Route>
        <Route path='/calendar' element={<Calendar/>}></Route>
        <Route path='/attendance' element={<Attendance/>}></Route>
        <Route path='/homework' element={<Homework/>}></Route>
        <Route path='/homework/:id' element={<HomeworkSubmission/>}></Route>
        <Route path='/transportation' element={<Transportation/>}></Route>      
        <Route path='/coursevideo' element={<CourseVideo/>}></Route>
        <Route path='/previouseducation' element={<PreviousEducation/>}></Route>
        <Route path='/information' element={<Information/>}></Route>
        <Route path='/feepaid' element={<FeePaid/>}></Route>
        <Route path='/creditfee' element={<CreditFee/>}></Route>
        <Route path='/gradesheet' element={<GradeSheet/>}></Route> 
        <Route path='/teacher' element={<Teacher/>}></Route>
        <Route path='/teacher/onlineclass' element={<TeacherOnlineClass/>}></Route>
        <Route path='/teacher/homeworkcheck' element={<HomeworkCheck/>}></Route>   
        <Route path='/teacher/calendar' element={<TeacherCalendar/>}></Route>
        <Route path='/news' element={<NewsDetail/>}></Route>     
        <Route path='/teacher/homework' element={<TeacherHomework/>}></Route>     
        <Route path='/teacher/studentattendance' element={<StudentAttendance/>}></Route>     
        <Route path='/teacher/uploadvideo' element={<UploadVideo/>}></Route>     
        <Route path='/teacher/markentry' element={<MarkEntry/>}></Route>     
        <Route path='/teacher/notice' element={<Notice/>}></Route>     
      </Routes>    
    </div>
  );
}

export default App;
