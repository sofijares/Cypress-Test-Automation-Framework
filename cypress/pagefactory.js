import LoginPage from './pages/loginpage'
import Checkbox from './pages/checkboxes'

class PageFactory {
    createPage(name) {
        if(name=='login')
        return LoginPage;
        else(name=='checkbox')
        return Checkbox
    }

}

module.exports = new PageFactory()